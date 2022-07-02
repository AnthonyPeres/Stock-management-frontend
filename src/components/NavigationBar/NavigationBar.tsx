import React, { useState } from "react";
import { NavLink } from "react-router-dom";

import { createStyles, Navbar, UnstyledButton, Tooltip, Title } from "@mantine/core";
import {
    Home2,
    Wallet,
    Gauge,
    DeviceDesktopAnalytics,
    Fingerprint,
    CalendarStats,
    User,
    Settings,
} from "tabler-icons-react";
import { locations } from "../Routes/locations";

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
}));

const mainLinksMockdata = [
    { icon: Home2, label: "Home", path: "/" },
    { icon: Wallet, label: "Wallet", path: "/wallet" },
    // { icon: Gauge, label: "Dashboard" },
    // { icon: DeviceDesktopAnalytics, label: "Analytics" },
    // { icon: CalendarStats, label: "Releases" },
    // { icon: User, label: "Account" },
    // { icon: Fingerprint, label: "Security" },
    // { icon: Settings, label: "Settings" },
];

const linksMockdata = ["Security", "Settings", "Dashboard", "Releases", "Account", "Databases"];

// Ne va pas puisque le libele se rafraichit pas automatiquement
const NavigationBar = () => {
    const { classes, cx } = useStyles();
    const [active, setActive] = useState("Home");
    const [activeLink, setActiveLink] = useState("Account");

    const mainLinks = mainLinksMockdata.map((link) => (
        <Tooltip
            label={link.label}
            position="right"
            withArrow
            transitionDuration={0}
            key={link.label}
        >
            <NavLink to={link.path} onClick={() => setActive(link.label)}>
                <UnstyledButton
                    onClick={() => setActive(link.label)}
                    className={cx(classes.mainLink, {
                        [classes.mainLinkActive]: link.label === active,
                    })}
                >
                    <link.icon />
                </UnstyledButton>
            </NavLink>
        </Tooltip>
    ));

    const links = linksMockdata.map((link) => (
        <a
            className={cx(classes.link, { [classes.linkActive]: activeLink === link })}
            href="/"
            onClick={(event) => {
                event.preventDefault();
                setActiveLink(link);
            }}
            key={link}
        >
            {link}
        </a>
    ));
    return (
        <Navbar width={{ sm: 300 }} p="xs">
            <Navbar.Section grow className={classes.wrapper}>
                <div className={classes.aside}>
                    <div className={classes.logo}>(logo)</div>
                    {mainLinks}
                </div>
                <div className={classes.main}>
                    <Title order={4} className={classes.title}>
                        {active}
                    </Title>

                    {links}
                </div>
            </Navbar.Section>
        </Navbar>
    );
};

export default NavigationBar;
