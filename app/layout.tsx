"use client";

import Link from "next/link";
import {BookOpen, Users} from "lucide-react";
import Providers from "./providers";
import "@/app/globals.css";
import {SidebarInset, SidebarProvider, SidebarTrigger} from "@/components/ui/sidebar"
import {AppSidebar} from "@/components/app-sidebar"
import {Separator} from "@/components/ui/separator";
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList, BreadcrumbPage,
    BreadcrumbSeparator
} from "@/components/ui/breadcrumb";

export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode;
}) {
    return (
        <Providers>
            <html lang="en">
                <body className="min-h-screen bg-background">
                    <SidebarProvider>
                        <AppSidebar/>
                        <SidebarInset>
                            <header className="flex h-16 shrink-0 items-center gap-2">
                                <div className="flex items-center gap-2 px-4">
                                    <SidebarTrigger className="-ml-1"/>
                                    <Separator
                                        orientation="vertical"
                                        className="mr-2 data-[orientation=vertical]:h-4"
                                    />
                                    <Breadcrumb>
                                        <BreadcrumbList>
                                            <BreadcrumbItem className="hidden md:block">
                                                <BreadcrumbLink href="#">
                                                    Building Your Application
                                                </BreadcrumbLink>
                                            </BreadcrumbItem>
                                            <BreadcrumbSeparator className="hidden md:block"/>
                                            <BreadcrumbItem>
                                                <BreadcrumbPage>Data Fetching</BreadcrumbPage>
                                            </BreadcrumbItem>
                                        </BreadcrumbList>
                                    </Breadcrumb>
                                </div>
                            </header>
                            <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
                                {children}
                            </div>
                        </SidebarInset>
                    </SidebarProvider>
                </body>
            </html>
        </Providers>
    );
}
