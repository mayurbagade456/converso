import { PricingTable } from "@clerk/nextjs";
import { currentUser } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

const Subscription = async () => {
    const user = await currentUser();

    if (!user) {
        redirect("/sign-in");
    }

    return (
        <main>
            <PricingTable />
        </main>
    );
};

export default Subscription;
