import SideNav from "../ui/dashboard/sidenav";
import Page from "./(overview)/page";
import Pages from "./invoices/page";

export const experimental_ppr = true;
export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <div className="flex h-screen flex-col md:flex-row md:overflow-hidden">
            <div className="w-full flex-none md:w-64">
                <SideNav />
            </div>
            {/* <Page/> */}
            <Pages />
        </div>
    )
}