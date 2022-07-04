import React from "react";
import { AppShell, Navbar, Header } from "@mantine/core";
import { NavigationBar } from "../NavigationBar";
import { CustomHeader } from "../CustomHeader";

interface Props {
    children: React.ReactNode;
}

const Layout = (props: Props) => {
    const { children } = props;

    return (
        <AppShell
            padding="md"
            navbar={<NavigationBar />}
            header={
                <CustomHeader
                    mainLinks={[
                        { label: "Home", link: "/" },
                        { label: "Wallet", link: "/wallet" },
                    ]}
                    userLinks={[
                        { label: "Home", link: "/home" },
                        { label: "Wallet", link: "/wallet" },
                    ]}
                />
            }
            styles={(theme) => ({
                main: {
                    backgroundColor:
                        theme.colorScheme === "dark" ? theme.colors.dark[8] : theme.colors.gray[0],
                    padding: 0,
                },
            })}
        >
            <main>{children}</main>
        </AppShell>
    );
};

export default Layout;
