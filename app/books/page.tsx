"use client";

import { useForm } from "react-hook-form";
import axios from "axios";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import {
  ColumnDef,
} from "@tanstack/react-table";
import { Button } from "@/components/ui/button";
import { Trash2 } from "lucide-react";
import {DataTable} from "@/components/DataTable";
import { Checkbox } from "@/components/ui/checkbox"


const bookSchema = z.object({
  id: z.number().optional(),
  title: z.string().min(1),
  author: z.string().min(1), // Changed to number for author ID
  genre: z.string().min(1),
  published_date: z.string().min(1),
});

type Book = z.infer<typeof bookSchema>;

const API_URL = "http://127.0.0.1:8000/api/books/";

export default function BooksPage() {
  const queryClient = useQueryClient();

  const { data: books, } = useQuery({
    queryKey: ["books"],
    queryFn: async () => {
      const res = await axios.get(API_URL);
      return res.data;
    },
  });

  const addBookMutation = useMutation({
    mutationFn: async (book: Book) => {
      if (book.id) {
        await axios.put(`${API_URL}${book.id}/`, book);
      } else {
        await axios.post(API_URL, book);
      }
    },
    onSuccess: () => queryClient.invalidateQueries(["books"]),
  });

  const deleteBookMutation = useMutation({
    mutationFn: async (id: number) => axios.delete(`${API_URL}${id}/`),
    onSuccess: () => queryClient.invalidateQueries(["books"]),
  });

  const { register, handleSubmit, reset } = useForm<Book>({
    resolver: zodResolver(bookSchema),
  });

  const columns: ColumnDef<Book>[] = [
    { accessorKey: "title", header: "Title" },
    { accessorKey: "author", header: "Author" },
    { accessorKey: "genre", header: "Genre" },
    { accessorKey: "published_date", header: "Published Date" },
    {
      id: "actions",
      header: "Actions",
      cell: ({ row }) => (
          <Button
              variant="destructive"
              onClick={() => deleteBookMutation.mutate(row.original.id!)}
          >
            <Trash2 className="w-4 h-4" />
          </Button>
      ),
    },
  ];


  return (
      <div className="p-6 space-y-6">
        {/*
        <Card>
          <CardContent>
            <Dialog>
              <DialogTrigger asChild>
                <Button>Add Book</Button>
              </DialogTrigger>
              <DialogContent>
                <DialogTitle>Add/Edit Book</DialogTitle>
                <form onSubmit={handleSubmit((data) => addBookMutation.mutate(data))} className="space-y-4">
                  <Input {...register("title")} placeholder="Title" />
                  <Input {...register("author")} placeholder="Autore" />
                  <Input {...register("genre")} placeholder="Genre" />
                  <Input {...register("published_date")} type="date" />
                  <Button type="submit">Save</Button>
                </form>
              </DialogContent>
            </Dialog>
          </CardContent>
        </Card>
        */}
        <DataTable data={books} columns={columns}/>
      </div>
  );
}