"use client"

import * as React from "react"
import {
  Import,
  Map,
  Command,
  Frame,
  LifeBuoy,
  PieChart,
  Send,
  Receipt,
  Truck,
} from "lucide-react"

import { NavMain } from "@/components/nav-main"
import { NavProjects } from "@/components/nav-projects"
import { NavSecondary } from "@/components/nav-secondary"
import { NavUser } from "@/components/nav-user"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"
import Image from "next/image";

const data = {
  user: {
    name: "Cristian",
    email: "cristian@cristian.com",
    avatar: "/avatars/shadcn.jpg",
  },
  navMain: [
    {
      title: "Missione",
      url: "books",
      icon: Truck,
      isActive: true,
      items: [
        {
          title: "Bolla",
          url: "#",
        },
        {
          title: "Giro",
          url: "#",
        },
        {
          title: "Contressegni",
          url: "#",
        },
      ],
    },
    {
      title: "Pianificazione",
      url: "#",
      icon: Map,
      items: [
        {
          title: "Zone giri",
          url: "#",
        },
        {
          title: "Zone vettori",
          url: "#",
        },
      ],
    },
    {
      title: "Upload file",
      url: "#",
      icon: Import,
      items: [
        {
          title: "Storico upload",
          url: "#",
        },
        {
          title: "Setting upload",
          url: "#",
        },
      ],
    },
    {
      title: "Fatturazione",
      url: "#",
      icon: Receipt,
      items: [
        {
          title: "Addebito",
          url: "#",
        },
        {
          title: "Pre fattura",
          url: "#",
        },
        {
          title: "Import xml",
          url: "#",
        },
      ],
    },
  ],
  navSecondary: [
    {
      title: "Help desk",
      url: "#",
      icon: LifeBuoy,
    },
  ],
}

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar variant="inset" {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton size="lg" asChild>
              <a href="#">
                  <Image className="h-8 w-8 rounded-lg" src="/logo.png" height={8} width={8} alt="Logo"/>
                <div className="grid flex-1 text-left text-sm leading-tight">
                  <span className="truncate font-medium">Be20</span>
                  <span className="truncate text-xs">BERPPP</span>
                </div>
              </a>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
        <NavSecondary items={data.navSecondary} className="mt-auto" />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
    </Sidebar>
  )
}
