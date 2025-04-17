"use client";

import * as React from "react";
import {
    ChevronDown,
    Home,
    Flame,
    Compass,
    Layout,
    LucideIcon,
} from "lucide-react";

import {
    Sidebar,
    SidebarGroupContent,
    SidebarMenu,
    SidebarGroup,
    SidebarMenuItem,
    SidebarSeparator,
    SidebarContent,
    SidebarRail,
} from "@/components/ui/sidebar";
import {
    Collapsible,
    CollapsibleContent,
    CollapsibleTrigger,
} from "./ui/collapsible";
import { SidebarGroupLabel, SidebarMenuButton } from "./custom-ui/sidebar";
import { Separator } from "./ui/separator";
import { Avatar } from "./ui/avatar";

type NavItem = {
    title: string;
    url: string;
    icon?: LucideIcon; // 아이콘은 선택적
};
// This is sample data.
const data = {
    navMain: [
        {
            title: "CUSTOM FEEDS",
            items: [
                {
                    title: "+ Create New Feed",
                    url: "#",
                },
            ],
        },
        {
            title: "RECENT",
            items: [
                {
                    icon: Home,
                    title: "r/Chess",
                    url: "#",
                },
                {
                    icon: Home,
                    title: "r/AskReddit",
                    url: "#",
                },
            ],
        },
        {
            title: "COMMUNITIES",
            items: [
                {
                    icon: Home,
                    title: "r/Chess",
                    url: "#",
                },
                {
                    icon: Home,
                    title: "r/AskReddit",
                    url: "#",
                },
                {
                    icon: Home,
                    title: "r/Programming",
                    url: "#",
                },
                {
                    icon: Home,
                    title: "r/JavaScript",
                    url: "#",
                },
                {
                    icon: Home,
                    title: "r/ReactJS",
                    url: "#",
                },
                {
                    icon: Home,
                    title: "r/WebDev",
                    url: "#",
                },
                {
                    icon: Home,
                    title: "r/CodingHelp",
                    url: "#",
                },
                {
                    icon: Home,
                    title: "r/LearnProgramming",
                    url: "#",
                },
                {
                    icon: Home,
                    title: "r/TechNews",
                    url: "#",
                },
                {
                    icon: Home,
                    title: "r/Gaming",
                    url: "#",
                },
                {
                    icon: Home,
                    title: "r/Movies",
                    url: "#",
                },
                {
                    icon: Home,
                    title: "r/Music",
                    url: "#",
                },
            ],
        },
        {
            title: "RESOURCES",
            items: [
                {
                    title: "Installation",
                    url: "#",
                },
                {
                    title: "Project Structure",
                    url: "#",
                },
            ],
        },
    ] as { title: string; items: NavItem[] }[],
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
    return (
        <Sidebar
            className="top-(--header-height) h-[calc(100svh-var(--header-height))]!"
            {...props}
        >
            <SidebarContent className="gap-0 p-4 overflow-y-scroll">
                <SidebarGroup className="p-0">
                    <SidebarMenuButton asChild className="px-4">
                        <a href={"/"}>
                            <Home
                                size={20}
                                strokeWidth={1}
                                className="shrink-0"
                            />
                            {"Home"}
                        </a>
                    </SidebarMenuButton>
                    <SidebarMenuButton asChild className="px-4">
                        <a href={"/"}>
                            <Flame
                                size={20}
                                strokeWidth={1}
                                className="shrink-0"
                            />
                            {"Popular"}
                        </a>
                    </SidebarMenuButton>
                    <SidebarMenuButton asChild className="px-4">
                        <a href={"/"}>
                            <Compass
                                size={20}
                                strokeWidth={1}
                                className="shrink-0"
                            />
                            {"Explore"}
                        </a>
                    </SidebarMenuButton>
                    <SidebarMenuButton asChild className="px-4">
                        <a href={"/All"}>
                            <Layout
                                size={20}
                                strokeWidth={1}
                                className="shrink-0"
                            />
                            {"All"}
                        </a>
                    </SidebarMenuButton>
                </SidebarGroup>
                {data.navMain.map((item) => (
                    <Collapsible
                        key={item.title}
                        title={item.title}
                        defaultOpen
                        className="group/collapsible"
                    >
                        <SidebarGroup className="p-0">
                            <SidebarSeparator className="my-4" />
                            <SidebarGroupLabel
                                asChild
                                className="group/label h-10 px-4 text-sm text-sidebar-foreground dark:text-[oklch(0.6_0.03_233.8)] hover:bg-sidebar-accent"
                            >
                                <CollapsibleTrigger>
                                    <p>{item.title}</p>
                                    <ChevronDown className="text-neutral-200 ml-auto transition-transform group-data-[state=open]/collapsible:rotate-180" />
                                </CollapsibleTrigger>
                            </SidebarGroupLabel>
                            <CollapsibleContent className="transition-all ease-in-out">
                                <SidebarGroupContent>
                                    <SidebarMenu>
                                        {item.items.map((item) => (
                                            <SidebarMenuItem key={item.title}>
                                                <SidebarMenuButton
                                                    className="px-4 h-10"
                                                    asChild
                                                >
                                                    <a href={item.url}>
                                                        {item.icon && (
                                                            <Avatar className="bg-amber-200" />
                                                        )}
                                                        {item.title}
                                                    </a>
                                                </SidebarMenuButton>
                                            </SidebarMenuItem>
                                        ))}
                                    </SidebarMenu>
                                </SidebarGroupContent>
                            </CollapsibleContent>
                        </SidebarGroup>
                    </Collapsible>
                ))}
            </SidebarContent>
            {/* <SidebarRail /> */}
        </Sidebar>
    );
}
