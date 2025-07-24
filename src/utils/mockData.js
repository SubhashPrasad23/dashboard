import { BellRing, CircleArrowRight, Box, GraduationCap, Settings, X, LayoutDashboard, ShoppingBag, Users, Info } from "lucide-react"
import user from "../assets/user.jpg"

export const tabs = [
    "Overview",
    "Performance",
    "Subscription Products",
    "Sales",
    "Customers",
    "Affiliates",
    "Net income/payments",
]

export const sidebarItems = [
    {
        icon: LayoutDashboard,
        label: "Dashboard",
        active: true,
    },
    { icon: BellRing, label: "Activity", badge: "12" },
    { icon: CircleArrowRight, label: "Transactions" },
    { icon: Box, label: "Products" },
    { icon: ShoppingBag, label: "Marketplace" },
    { icon: Users, label: "Users" },
    { icon: GraduationCap, label: "Academy" },
]

export const bottomSidebarItems = [
    { icon: Info, label: "Help" },
    { icon: Settings, label: "Settings" },
]

export const affiliates = [
    { name: "Olivia Rhye", handle: "@olivia", income: "$3,800", img: user },
    { name: "Phoenix Baker", handle: "@phoenix", income: "$3,250", img: user },
    { name: "Lana Steiner", handle: "@lana", income: "$1,800", img: user },
    { name: "Natali Craig", handle: "@natali", income: "$1,550", img: user },
    { name: "Daniel Foster", handle: "@olivia", income: "$3,800", img: user },
    { name: "Liam Mitchell", handle: "@phoenix", income: "$3,250", img: user },
    { name: "James Carter", handle: "@demi", income: "$1,550", img: user },
]

