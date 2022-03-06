"use strict";
exports.__esModule = true;
var React = require("react");
var material_1 = require("@mui/material");
var Menu_1 = require("@mui/icons-material/Menu");
var react_fontawesome_1 = require("@fortawesome/react-fontawesome");
var free_solid_svg_icons_1 = require("@fortawesome/free-solid-svg-icons");
var link_1 = require("next/link");
function Navbar() {
    var _a = React.useState(false), drawer = _a[0], setDrawer = _a[1];
    var _b = React.useState(false), modal = _b[0], setModal = _b[1];
    var style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: 24,
        p: 4
    };
    return (React.createElement(React.Fragment, null,
        React.createElement(material_1.Box, { sx: { flexGrow: 1 } },
            React.createElement(material_1.AppBar, { className: "bg-black text-white", position: "fixed" },
                React.createElement(material_1.Toolbar, null,
                    React.createElement(material_1.IconButton, { size: "large", edge: "start", color: "inherit", "aria-label": "menu", sx: { mr: 2 }, onClick: function () { setDrawer(true); } },
                        React.createElement(Menu_1["default"], null)),
                    React.createElement(material_1.Typography, { variant: "h6", component: "div", sx: { flexGrow: 1 } }, "StepUp Quiz"),
                    React.createElement(material_1.Button, { onClick: function () { return setModal(true); }, color: "inherit" }, "Login")))),
        React.createElement(material_1.Box, null,
            React.createElement(material_1.Drawer, { anchor: "left", open: drawer, onClose: function () { return setDrawer(false); } },
                React.createElement(material_1.List, { sx: { width: "67vw", padding: "1rem" } },
                    React.createElement(link_1["default"], { href: "/Profile" },
                        React.createElement(material_1.ListItem, { alignItems: "flex-start", button: true },
                            React.createElement(material_1.ListItemIcon, null,
                                React.createElement(react_fontawesome_1.FontAwesomeIcon, { icon: free_solid_svg_icons_1.faUser })),
                            React.createElement(material_1.ListItemText, null, " My Profile ")))))),
        React.createElement(material_1.Modal, { open: modal, onClose: function () { return setModal(false); } },
            React.createElement(material_1.Box, { className: "bg-white p-4" },
                React.createElement(material_1.Button, { className: "bg-white p-4 text-black" }, " Login with Google ")))));
}
exports["default"] = Navbar;
