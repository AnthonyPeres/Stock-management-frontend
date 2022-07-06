import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { ActionIcon, useMantineColorScheme } from "@mantine/core";
import { Sun, MoonStars } from "tabler-icons-react";

import {
    Icon as TablerIcon,
    Home2,
    Wallet,
    Gauge,
    DeviceDesktopAnalytics,
    Fingerprint,
    CalendarStats,
    User,
    Logout,
    SwitchHorizontal,
    Settings,
    DeviceAnalytics,
} from "tabler-icons-react";
import { locations } from "../Routes/locations";
import { Title, Navbar, Center, Tooltip, UnstyledButton, createStyles, Group } from "@mantine/core";

const useStyles = createStyles((theme) => ({
    wrapper: {
        display: "flex",
    },

    aside: {
        flex: "0 0 60px",
        backgroundColor: theme.colorScheme === "dark" ? theme.colors.dark[7] : theme.white,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        borderRight: `1px solid ${
            theme.colorScheme === "dark" ? theme.colors.dark[7] : theme.colors.gray[3]
        }`,
    },

    main: {
        flex: 1,
        backgroundColor: theme.colorScheme === "dark" ? theme.colors.dark[6] : theme.colors.gray[0],
    },

    mainLink: {
        width: 44,
        height: 44,
        borderRadius: theme.radius.md,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        color: theme.colorScheme === "dark" ? theme.colors.dark[0] : theme.colors.gray[7],

        "&:hover": {
            backgroundColor:
                theme.colorScheme === "dark" ? theme.colors.dark[5] : theme.colors.gray[0],
        },
    },

    mainLinkActive: {
        "&, &:hover": {
            backgroundColor:
                theme.colorScheme === "dark"
                    ? theme.fn.rgba(theme.colors[theme.primaryColor][9], 0.25)
                    : theme.colors[theme.primaryColor][0],
            color: theme.colors[theme.primaryColor][theme.colorScheme === "dark" ? 4 : 7],
        },
    },

    title: {
        boxSizing: "border-box",
        fontFamily: `Greycliff CF, ${theme.fontFamily}`,
        marginBottom: theme.spacing.xl,
        backgroundColor: theme.colorScheme === "dark" ? theme.colors.dark[7] : theme.white,
        padding: theme.spacing.md,
        paddingTop: 18,
        height: 60,
        borderBottom: `1px solid ${
            theme.colorScheme === "dark" ? theme.colors.dark[7] : theme.colors.gray[3]
        }`,
    },

    logo: {
        boxSizing: "border-box",
        width: "100%",
        display: "flex",
        justifyContent: "center",
        height: 60,
        paddingTop: theme.spacing.md,
        borderBottom: `1px solid ${
            theme.colorScheme === "dark" ? theme.colors.dark[7] : theme.colors.gray[3]
        }`,
        marginBottom: theme.spacing.xl,
    },

    link: {
        boxSizing: "border-box",
        display: "block",
        textDecoration: "none",
        borderTopRightRadius: theme.radius.md,
        borderBottomRightRadius: theme.radius.md,
        color: theme.colorScheme === "dark" ? theme.colors.dark[0] : theme.colors.gray[7],
        padding: `0 ${theme.spacing.md}px`,
        fontSize: theme.fontSizes.sm,
        marginRight: theme.spacing.md,
        fontWeight: 500,
        height: 44,
        lineHeight: "44px",

        "&:hover": {
            backgroundColor:
                theme.colorScheme === "dark" ? theme.colors.dark[5] : theme.colors.gray[1],
            color: theme.colorScheme === "dark" ? theme.white : theme.black,
        },
    },

    linkActive: {
        "&, &:hover": {
            borderLeftColor: theme.colors[theme.primaryColor][theme.colorScheme === "dark" ? 7 : 5],
            backgroundColor: theme.colors[theme.primaryColor][theme.colorScheme === "dark" ? 7 : 5],
            color: theme.white,
        },
    },

    active: {
        "&, &:hover": {
            backgroundColor:
                theme.colorScheme === "dark"
                    ? theme.fn.rgba(theme.colors[theme.primaryColor][9], 0.25)
                    : theme.colors[theme.primaryColor][0],
            color: theme.colors[theme.primaryColor][theme.colorScheme === "dark" ? 4 : 7],
        },
    },
}));

const topLinksMockdata = [
    { icon: Home2, label: "Home", path: locations.home() },
    { icon: Wallet, label: "Wallet", path: locations.wallet() },
    { icon: DeviceAnalytics, label: "Analyse cours", path: locations.analyse_cours() },
];

const bottomLinksMockdata = [
    { icon: Settings, label: "Settings", path: locations.settings() },
    { icon: Logout, label: "Logout", path: "/logout" },
];

const NavigationBar = () => {
    const { classes, cx } = useStyles();
    const { colorScheme, toggleColorScheme } = useMantineColorScheme();
    const dark = colorScheme === "dark";

    const topLinks = topLinksMockdata.map((link) => (
        <Tooltip
            label={link.label}
            position="right"
            withArrow
            transitionDuration={0}
            key={link.label}
        >
            <NavLink to={link.path}>
                <UnstyledButton
                    className={cx(classes.mainLink, {
                        [classes.mainLinkActive]: link.path === window.location.pathname.toString(),
                    })}
                >
                    <link.icon />
                </UnstyledButton>
            </NavLink>
        </Tooltip>
    ));

    const bottomLinks = bottomLinksMockdata.map((link) => (
        <Tooltip
            label={link.label}
            position="right"
            withArrow
            transitionDuration={0}
            key={link.label}
        >
            <NavLink to={link.path}>
                <UnstyledButton
                    className={cx(classes.mainLink, {
                        [classes.mainLinkActive]: link.path === window.location.pathname.toString(),
                    })}
                >
                    <link.icon />
                </UnstyledButton>
            </NavLink>
        </Tooltip>
    ));

    return (
        <Navbar width={{ base: 80 }} p="md">
            <Center>logo</Center>
            <Navbar.Section grow mt={50}>
                <Group direction="column" align="center" spacing={0}>
                    {topLinks}
                </Group>
            </Navbar.Section>

            <Navbar.Section>
                <Group direction="column" align="center" spacing={0}>
                    {bottomLinks}
                </Group>

                <Group direction="column" align="center" spacing={0}>
                    <ActionIcon
                        variant="outline"
                        color={dark ? "yellow" : "blue"}
                        onClick={() => toggleColorScheme()}
                        title="Toggle color scheme"
                    >
                        {dark ? <Sun size={18} /> : <MoonStars size={18} />}
                    </ActionIcon>
                </Group>
            </Navbar.Section>
        </Navbar>
    );
};

export default NavigationBar;
