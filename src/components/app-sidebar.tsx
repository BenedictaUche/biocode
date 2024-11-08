import React, { useState } from "react";
import {
  FolderKanban,
  ShoppingBag,
  Building2,
  Sprout,
  ShieldCheck,
  ChevronsUpDown,
  Check,
  UserRoundPlus,
  CircleHelp,
  Bell,
  Plus,
} from "lucide-react";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "./ui/sidebar";
import { Button } from "@/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { fetchDashboardData } from "@/services/api";
import { useQuery } from "@tanstack/react-query";
import { BiocodeDataType } from "@/services/type";

// Menu items.
const items = [
  {
    title: "Overview",
    url: "#",
    icon: FolderKanban,
  },
  {
    title: "All Products",
    url: "#",
    icon: ShoppingBag,
  },
  {
    title: "All Companies",
    url: "#",
    icon: Building2,
  },
  {
    title: "Supply chain",
    url: "#",
    icon: Sprout,
  },
];

export function AppSidebar() {
  const [open, setOpen] = React.useState(false);
  const { isLoading, isError, data, error } = useQuery({
    queryKey: ["sidebar"],
    queryFn: fetchDashboardData,
  });

  if (isLoading) {
    return <div>Loading...</div>;
  }

  // if (isError) {
  //   return <div>Error: {error.message}</div>;
  // }

  return (
    <Sidebar>
      <SidebarContent className="pl-4">
        <SidebarGroup>
          <SidebarGroupLabel>
            <Popover open={open} onOpenChange={setOpen}>
              <PopoverTrigger asChild>
                <Button
                  variant="outline"
                  role="combobox"
                  aria-expanded={open}
                  className="w-[200px] justify-between"
                >
                  Acme foods
                  <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-[200px] p-0">
                <Command>
                  <CommandList>
                    <CommandGroup>
                      <CommandItem>Acme bites</CommandItem>
                    </CommandGroup>
                  </CommandList>
                </Command>
              </PopoverContent>
            </Popover>
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              <Button variant="outline" className="mt-4">
                <Plus />
                New Calculation
              </Button>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton
                    asChild
                    className="text-xs text-[#4c5d8b] font-semibold"
                  >
                    <a href={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
              <div className="py-6">
                <p className="text-left text-[#a3abbf] uppercase text-sm font-semibold">
                  Favourites
                </p>
                <SidebarMenuItem>
                  <SidebarMenuButton className=" text-xs text-[#4c5d8b] font-semibold">
                    <a className="flex items-center gap-2">
                      <ShieldCheck size={16} />
                      <span>Test Scenario</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              </div>

              <div className="pb-6">
                <p className="text-left text-[#a3abbf] uppercase text-sm font-semibold">
                  Companies
                </p>
                {data.sidebar.companies.map((company: string) => (
                  <SidebarMenuItem key={company}>
                    <SidebarMenuButton className=" text-xs text-[#4c5d8b] font-semibold">
                      <a href="#" className="flex items-center gap-2">
                        <ShieldCheck size={16} />
                        <span>{company}</span>
                      </a>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </div>

              <p className="text-left text-[#a3abbf] uppercase text-sm font-semibold">
                Products
              </p>
              <SidebarMenuItem>
                <SidebarMenuButton className=" text-xs text-[#4c5d8b] font-semibold">
                  <a href="#" className="flex items-center gap-2">
                    <ShieldCheck size={16} />
                    <span>Acme Tofu</span>
                  </a>
                </SidebarMenuButton>
                <SidebarMenuButton className=" text-xs text-[#4c5d8b] font-semibold">
                  <a href="#" className="flex items-center gap-2">
                    <ShieldCheck size={16} />
                    <span>Acme Pasta</span>
                  </a>
                </SidebarMenuButton>
                {data.sidebar.menuItems.map((items: any) => (
                  <SidebarMenuButton
                    key={items}
                    className="text-xs text-[#4c5d8b] font-semibold"
                  >
                    <a href={items.url} className="flex items-center">
                      <span>{items.name}</span>
                    </a>
                  </SidebarMenuButton>
                ))}
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton className="text-xs text-[#4c5d8b] font-semibold">
                  <a href="#" className="flex items-center gap-2">
                    <ShieldCheck size={16} />
                    <span>Test Product</span>
                  </a>
                </SidebarMenuButton>
              </SidebarMenuItem>

              <div className="relative mt-20">
                <SidebarMenuItem className="">
                  <SidebarMenuButton className=" text-xs">
                    <a href="#" className="flex items-center gap-4">
                      <UserRoundPlus size={16} />
                      <span>Invite People</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
                <div className="flex justify-between border-t-2 border-t-slate-200 pt-2 mt-2">
                  <Button variant={"outline"}>
                    <CircleHelp /> Help
                  </Button>
                  <Button variant={"outline"}>
                    <Bell />
                  </Button>
                </div>
              </div>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
