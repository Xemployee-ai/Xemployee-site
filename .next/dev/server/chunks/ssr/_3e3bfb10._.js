module.exports = [
"[project]/components/bushido-shader-background.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "BushidoShaderBackground",
    ()=>BushidoShaderBackground
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$paper$2d$design$2f$shaders$2d$react$2f$dist$2f$shaders$2f$mesh$2d$gradient$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@paper-design/shaders-react/dist/shaders/mesh-gradient.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$paper$2d$design$2f$shaders$2d$react$2f$dist$2f$shaders$2f$dot$2d$orbit$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@paper-design/shaders-react/dist/shaders/dot-orbit.js [app-ssr] (ecmascript)");
"use client";
;
;
function BushidoShaderBackground({ variant = "main", activeEffect = "mesh", speed = 2.5, intensity = 3.0 }) {
    const isDojo = variant === "dojo";
    // Main landing palette: Example folder inspired - Liquid Metal / Chrome
    const meshColorsMain = [
        "#000000",
        "#1a1a1a",
        "#333333",
        "#ffffff"
    ];
    const dotColorMain = "#333333";
    const orbitColorMain = "#1a1a1a";
    // Dojo palette: same liquid metal theme for consistency
    const meshColorsDojo = [
        "#000000",
        "#1a1a1a",
        "#333333",
        "#ffffff"
    ];
    const dotColorDojo = "#333333";
    const orbitColorDojo = "#1a1a1a";
    const meshColors = isDojo ? meshColorsDojo : meshColorsMain;
    const dotColor = isDojo ? dotColorDojo : dotColorMain;
    const orbitColor = isDojo ? orbitColorDojo : orbitColorMain;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            activeEffect === "mesh" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "w-full h-screen fixed inset-0 z-0 bg-black",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$paper$2d$design$2f$shaders$2d$react$2f$dist$2f$shaders$2f$mesh$2d$gradient$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MeshGradient"], {
                    className: "w-full h-full",
                    colors: meshColors,
                    speed: speed
                }, void 0, false, {
                    fileName: "[project]/components/bushido-shader-background.tsx",
                    lineNumber: 38,
                    columnNumber: 21
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/bushido-shader-background.tsx",
                lineNumber: 37,
                columnNumber: 17
            }, this),
            activeEffect === "dots" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "w-full h-screen fixed inset-0 bg-black z-0",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$paper$2d$design$2f$shaders$2d$react$2f$dist$2f$shaders$2f$dot$2d$orbit$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DotOrbit"], {
                    className: "w-full h-full",
                    // dotColor={dotColor} - Removed invalid prop
                    // orbitColor={orbitColor} - Removed invalid prop
                    speed: speed
                }, void 0, false, {
                    fileName: "[project]/components/bushido-shader-background.tsx",
                    lineNumber: 48,
                    columnNumber: 21
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/bushido-shader-background.tsx",
                lineNumber: 47,
                columnNumber: 17
            }, this),
            activeEffect === "combined" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "w-full h-screen fixed inset-0 z-0 bg-black",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$paper$2d$design$2f$shaders$2d$react$2f$dist$2f$shaders$2f$mesh$2d$gradient$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MeshGradient"], {
                            className: "w-full h-full",
                            colors: meshColors,
                            speed: speed * 0.5
                        }, void 0, false, {
                            fileName: "[project]/components/bushido-shader-background.tsx",
                            lineNumber: 61,
                            columnNumber: 25
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/bushido-shader-background.tsx",
                        lineNumber: 60,
                        columnNumber: 21
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "w-full h-screen fixed inset-0 opacity-60 z-0",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$paper$2d$design$2f$shaders$2d$react$2f$dist$2f$shaders$2f$dot$2d$orbit$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DotOrbit"], {
                            className: "w-full h-full",
                            // dotColor={dotColor} - Removed invalid prop
                            // orbitColor={orbitColor} - Removed invalid prop
                            speed: speed * 1.5
                        }, void 0, false, {
                            fileName: "[project]/components/bushido-shader-background.tsx",
                            lineNumber: 69,
                            columnNumber: 25
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/bushido-shader-background.tsx",
                        lineNumber: 68,
                        columnNumber: 21
                    }, this)
                ]
            }, void 0, true),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "fixed inset-0 pointer-events-none z-0",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute top-1/4 left-1/3 w-96 h-96 bg-white/[0.03] rounded-full blur-3xl animate-pulse",
                        style: {
                            animationDuration: `${3 / speed}s`
                        }
                    }, void 0, false, {
                        fileName: "[project]/components/bushido-shader-background.tsx",
                        lineNumber: 83,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute bottom-1/3 right-1/4 w-64 h-64 bg-white/[0.025] rounded-full blur-3xl animate-pulse",
                        style: {
                            animationDuration: `${2 / speed}s`,
                            animationDelay: "1s"
                        }
                    }, void 0, false, {
                        fileName: "[project]/components/bushido-shader-background.tsx",
                        lineNumber: 88,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute top-1/2 right-1/3 w-48 h-48 bg-white/[0.02] rounded-full blur-2xl animate-pulse",
                        style: {
                            animationDuration: `${4 / speed}s`,
                            animationDelay: "0.5s"
                        }
                    }, void 0, false, {
                        fileName: "[project]/components/bushido-shader-background.tsx",
                        lineNumber: 93,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute top-3/4 left-1/2 w-80 h-80 bg-white/[0.015] rounded-full blur-3xl animate-pulse",
                        style: {
                            animationDuration: `${5 / speed}s`,
                            animationDelay: "1.5s"
                        }
                    }, void 0, false, {
                        fileName: "[project]/components/bushido-shader-background.tsx",
                        lineNumber: 98,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute top-1/3 right-2/3 w-56 h-56 bg-white/[0.02] rounded-full blur-2xl animate-pulse",
                        style: {
                            animationDuration: `${3.5 / speed}s`,
                            animationDelay: "2s"
                        }
                    }, void 0, false, {
                        fileName: "[project]/components/bushido-shader-background.tsx",
                        lineNumber: 102,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute bottom-1/4 left-2/3 w-72 h-72 bg-white/[0.018] rounded-full blur-3xl animate-pulse",
                        style: {
                            animationDuration: `${2.5 / speed}s`,
                            animationDelay: "0.8s"
                        }
                    }, void 0, false, {
                        fileName: "[project]/components/bushido-shader-background.tsx",
                        lineNumber: 106,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/bushido-shader-background.tsx",
                lineNumber: 81,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true);
}
}),
"[project]/components/animated-logo.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AnimatedLogo",
    ()=>AnimatedLogo
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$page$2d$transition$2d$provider$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/page-transition-provider.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/utils.ts [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
function AnimatedLogo({ targetPath = "/dojo", className }) {
    const [isAnimated, setIsAnimated] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const { startTransition } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$page$2d$transition$2d$provider$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["usePageTransition"])();
    const handleClick = ()=>{
        startTransition(targetPath);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
        onClick: handleClick,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("relative flex items-center justify-center h-20 w-20 rounded-full manifesto-effect-shine manifesto-effect-pill border-2 border-white/30 bg-white/10 backdrop-blur-md cursor-pointer overflow-hidden", className),
        style: {
            boxShadow: 'inset 0 0 1px 1px rgba(255, 255, 255, 0.1), inset 0 0 2px 1px rgba(255, 255, 255, 0.3), 0 0 15px 0 rgba(255, 255, 255, 0.2), 0 0 30px 0 rgba(255, 255, 255, 0.1)'
        },
        animate: {
            y: isAnimated ? 50 : 0,
            opacity: isAnimated ? 0 : 1,
            filter: isAnimated ? "blur(4px)" : "blur(0px)",
            rotate: isAnimated ? 180 : 0
        },
        transition: {
            duration: 0.5,
            type: "spring",
            stiffness: 200,
            damping: 20
        },
        whileHover: {
            scale: 1.1
        },
        whileTap: {
            scale: 0.95
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "z-10 absolute h-11 w-11 rounded-full pointer-events-none",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "h-[2px] w-[2px] bg-white rounded-full absolute top-4 left-4 blur-[1px]"
                    }, void 0, false, {
                        fileName: "[project]/components/animated-logo.tsx",
                        lineNumber: 48,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "h-[2px] w-[2px] bg-white rounded-full absolute top-3 left-7 blur-[0.8px]"
                    }, void 0, false, {
                        fileName: "[project]/components/animated-logo.tsx",
                        lineNumber: 49,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "h-[2px] w-[2px] bg-white rounded-full absolute top-8 left-2 blur-[1px]"
                    }, void 0, false, {
                        fileName: "[project]/components/animated-logo.tsx",
                        lineNumber: 50,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "h-[2px] w-[2px] bg-white rounded-full absolute top-5 left-9 blur-[0.8px]"
                    }, void 0, false, {
                        fileName: "[project]/components/animated-logo.tsx",
                        lineNumber: 51,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "h-[2px] w-[2px] bg-white rounded-full absolute top-7 left-7 blur-[1px]"
                    }, void 0, false, {
                        fileName: "[project]/components/animated-logo.tsx",
                        lineNumber: 52,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/animated-logo.tsx",
                lineNumber: 47,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                className: "absolute inset-0 bg-gradient-to-br from-white/20 to-white/5 rounded-full",
                animate: {
                    scale: [
                        1,
                        1.2,
                        1
                    ],
                    opacity: [
                        0.3,
                        0.5,
                        0.3
                    ]
                },
                transition: {
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut"
                }
            }, void 0, false, {
                fileName: "[project]/components/animated-logo.tsx",
                lineNumber: 56,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                className: "relative z-20 w-14 h-14 flex items-center justify-center",
                animate: {
                    rotate: [
                        0,
                        360
                    ]
                },
                transition: {
                    duration: 20,
                    repeat: Infinity,
                    ease: "linear"
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "relative w-full h-full",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "absolute inset-0 bg-gradient-to-br from-[#dc2626] via-[#b91c1c] to-[#7f1d1d] blur-sm opacity-50 animate-gradient-flow",
                            style: {
                                maskImage: 'url(/Xemployeelogo.svg)',
                                maskSize: 'contain',
                                maskRepeat: 'no-repeat',
                                maskPosition: 'center',
                                WebkitMaskImage: 'url(/Xemployeelogo.svg)',
                                WebkitMaskSize: 'contain',
                                WebkitMaskRepeat: 'no-repeat',
                                WebkitMaskPosition: 'center'
                            }
                        }, void 0, false, {
                            fileName: "[project]/components/animated-logo.tsx",
                            lineNumber: 83,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "absolute inset-0",
                            style: {
                                maskImage: 'url(/Xemployeelogo.svg)',
                                maskSize: 'contain',
                                maskRepeat: 'no-repeat',
                                maskPosition: 'center',
                                WebkitMaskImage: 'url(/Xemployeelogo.svg)',
                                WebkitMaskSize: 'contain',
                                WebkitMaskRepeat: 'no-repeat',
                                WebkitMaskPosition: 'center'
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "absolute inset-0 bg-gradient-to-br from-[#dc2626] via-[#b91c1c] to-[#7f1d1d] animate-gradient-flow"
                                }, void 0, false, {
                                    fileName: "[project]/components/animated-logo.tsx",
                                    lineNumber: 110,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent animate-shine"
                                }, void 0, false, {
                                    fileName: "[project]/components/animated-logo.tsx",
                                    lineNumber: 113,
                                    columnNumber: 25
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/animated-logo.tsx",
                            lineNumber: 97,
                            columnNumber: 21
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/animated-logo.tsx",
                    lineNumber: 81,
                    columnNumber: 17
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/animated-logo.tsx",
                lineNumber: 70,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/animated-logo.tsx",
        lineNumber: 22,
        columnNumber: 9
    }, this);
}
}),
"[project]/components/dojo-core-ball.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "DojoCoreBall",
    ()=>DojoCoreBall
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
"use client";
;
function DojoCoreBall() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "relative h-[28rem] w-[28rem] max-w-[90vw]",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0 rounded-full blur-[8px] bg-gradient-to-br from-cyan-200 via-indigo-500 to-pink-500 opacity-80 animate-pulse"
            }, void 0, false, {
                fileName: "[project]/components/dojo-core-ball.tsx",
                lineNumber: 6,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-3 rounded-full bg-gradient-to-br from-cyan-200 via-indigo-400 to-pink-400 shadow-[0_0_120px_rgba(99,102,241,0.65)]"
            }, void 0, false, {
                fileName: "[project]/components/dojo-core-ball.tsx",
                lineNumber: 7,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-8 rounded-full bg-white/20 blur-3xl"
            }, void 0, false, {
                fileName: "[project]/components/dojo-core-ball.tsx",
                lineNumber: 8,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-12 rounded-full border border-white/30 bg-transparent"
            }, void 0, false, {
                fileName: "[project]/components/dojo-core-ball.tsx",
                lineNumber: 9,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/dojo-core-ball.tsx",
        lineNumber: 5,
        columnNumber: 5
    }, this);
}
}),
"[project]/app/dojo/page.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>DojoPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$bushido$2d$shader$2d$background$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/bushido-shader-background.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$animated$2d$logo$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/animated-logo.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$dojo$2d$core$2d$ball$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/dojo-core-ball.tsx [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
function DojoPage() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
        className: "relative min-h-screen overflow-hidden",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$bushido$2d$shader$2d$background$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["BushidoShaderBackground"], {
                variant: "dojo"
            }, void 0, false, {
                fileName: "[project]/app/dojo/page.tsx",
                lineNumber: 11,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "relative z-10 flex min-h-screen flex-col items-center justify-center px-6 py-24",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                        initial: {
                            opacity: 0,
                            y: 24,
                            filter: "blur(10px)"
                        },
                        animate: {
                            opacity: 1,
                            y: 0,
                            filter: "blur(0px)"
                        },
                        transition: {
                            duration: 0.8,
                            ease: [
                                0.22,
                                1,
                                0.36,
                                1
                            ]
                        },
                        className: "mb-10 flex items-center justify-center",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$dojo$2d$core$2d$ball$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DojoCoreBall"], {}, void 0, false, {
                            fileName: "[project]/app/dojo/page.tsx",
                            lineNumber: 22,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/dojo/page.tsx",
                        lineNumber: 16,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                        className: "max-w-3xl text-center",
                        initial: {
                            opacity: 0,
                            y: 24,
                            filter: "blur(8px)"
                        },
                        animate: {
                            opacity: 1,
                            y: 0,
                            filter: "blur(0px)"
                        },
                        transition: {
                            duration: 0.7,
                            ease: [
                                0.22,
                                1,
                                0.36,
                                1
                            ],
                            delay: 0.15
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "mb-4 text-xs font-medium uppercase tracking-[0.3em] text-cyan-300/70",
                                children: "Bushido • Inner Dojo"
                            }, void 0, false, {
                                fileName: "[project]/app/dojo/page.tsx",
                                lineNumber: 32,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                className: "mb-4 text-4xl font-semibold tracking-tight text-slate-50 sm:text-5xl md:text-6xl",
                                children: [
                                    "Welcome to the",
                                    " ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "bg-gradient-to-r from-cyan-300 via-sky-400 to-indigo-400 bg-clip-text text-transparent",
                                        children: "decision dojo"
                                    }, void 0, false, {
                                        fileName: "[project]/app/dojo/page.tsx",
                                        lineNumber: 37,
                                        columnNumber: 13
                                    }, this),
                                    "."
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/dojo/page.tsx",
                                lineNumber: 35,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "mx-auto max-w-xl text-sm text-slate-300/80 sm:text-base",
                                children: "This is the space the ball opens. We can wire in the real product experience next."
                            }, void 0, false, {
                                fileName: "[project]/app/dojo/page.tsx",
                                lineNumber: 42,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/dojo/page.tsx",
                        lineNumber: 26,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/dojo/page.tsx",
                lineNumber: 14,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "fixed bottom-32 right-12 z-10 pointer-events-auto",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$animated$2d$logo$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AnimatedLogo"], {
                    targetPath: "/"
                }, void 0, false, {
                    fileName: "[project]/app/dojo/page.tsx",
                    lineNumber: 50,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/dojo/page.tsx",
                lineNumber: 49,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/dojo/page.tsx",
        lineNumber: 10,
        columnNumber: 5
    }, this);
}
}),
"[project]/node_modules/@paper-design/shaders/dist/vertex-shader.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/* * * * * * * * * * * * * * * * * * * * * * * * * * * *
 *                    Paper Shaders                    *
 *       https://github.com/paper-design/shaders       *
 * * * * * * * * * * * * * * * * * * * * * * * * * * * */ __turbopack_context__.s([
    "vertexShaderSource",
    ()=>vertexShaderSource
]);
const vertexShaderSource = `#version 300 es
precision mediump float;

layout(location = 0) in vec4 a_position;

uniform vec2 u_resolution;
uniform float u_pixelRatio;
uniform float u_imageAspectRatio;

uniform float u_originX;
uniform float u_originY;
uniform float u_worldWidth;
uniform float u_worldHeight;
uniform float u_fit;

uniform float u_scale;
uniform float u_rotation;
uniform float u_offsetX;
uniform float u_offsetY;

uniform float u_pxSize;

out vec2 v_objectUV;
out vec2 v_objectBoxSize;
out vec2 v_objectHelperBox;

out vec2 v_responsiveUV;
out vec2 v_responsiveBoxSize;
out vec2 v_responsiveHelperBox;
out vec2 v_responsiveBoxGivenSize;

out vec2 v_patternUV;
out vec2 v_patternBoxSize;
out vec2 v_patternHelperBox;

out vec2 v_imageUV;

// #define ADD_HELPERS

vec3 getBoxSize(float boxRatio, vec2 givenBoxSize) {
  vec2 box = vec2(0.);
  // fit = none
  box.x = boxRatio * min(givenBoxSize.x / boxRatio, givenBoxSize.y);
  float noFitBoxWidth = box.x;
  if (u_fit == 1.) { // fit = contain
    box.x = boxRatio * min(u_resolution.x / boxRatio, u_resolution.y);
  } else if (u_fit == 2.) { // fit = cover
    box.x = boxRatio * max(u_resolution.x / boxRatio, u_resolution.y);
  }
  box.y = box.x / boxRatio;
  return vec3(box, noFitBoxWidth);
}

void main() {
  gl_Position = a_position;

  vec2 uv = gl_Position.xy * .5;
  vec2 boxOrigin = vec2(.5 - u_originX, u_originY - .5);
  vec2 givenBoxSize = vec2(u_worldWidth, u_worldHeight);
  givenBoxSize = max(givenBoxSize, vec2(1.)) * u_pixelRatio;
  float r = u_rotation * 3.14159265358979323846 / 180.;
  mat2 graphicRotation = mat2(cos(r), sin(r), -sin(r), cos(r));
  vec2 graphicOffset = vec2(-u_offsetX, u_offsetY);


  // ===================================================
  // Sizing api for graphic objects with fixed ratio
  // (currently supports only ratio = 1)

  float fixedRatio = 1.;
  vec2 fixedRatioBoxGivenSize = vec2(
  (u_worldWidth == 0.) ? u_resolution.x : givenBoxSize.x,
  (u_worldHeight == 0.) ? u_resolution.y : givenBoxSize.y
  );

  v_objectBoxSize = getBoxSize(fixedRatio, fixedRatioBoxGivenSize).xy;
  vec2 objectWorldScale = u_resolution.xy / v_objectBoxSize;

  #ifdef ADD_HELPERS
  v_objectHelperBox = uv;
  v_objectHelperBox *= objectWorldScale;
  v_objectHelperBox += boxOrigin * (objectWorldScale - 1.);
  #endif

  v_objectUV = uv;
  v_objectUV *= objectWorldScale;
  v_objectUV += boxOrigin * (objectWorldScale - 1.);
  v_objectUV += graphicOffset;
  v_objectUV /= u_scale;
  v_objectUV = graphicRotation * v_objectUV;


  // ===================================================


  // ===================================================
  // Sizing api for graphic objects with either givenBoxSize ratio or canvas ratio.
  // Full-screen mode available with u_worldWidth = u_worldHeight = 0

  v_responsiveBoxGivenSize = vec2(
  (u_worldWidth == 0.) ? u_resolution.x : givenBoxSize.x,
  (u_worldHeight == 0.) ? u_resolution.y : givenBoxSize.y
  );
  float responsiveRatio = v_responsiveBoxGivenSize.x / v_responsiveBoxGivenSize.y;
  v_responsiveBoxSize = getBoxSize(responsiveRatio, v_responsiveBoxGivenSize).xy;
  vec2 responsiveBoxScale = u_resolution.xy / v_responsiveBoxSize;

  #ifdef ADD_HELPERS
  v_responsiveHelperBox = uv;
  v_responsiveHelperBox *= responsiveBoxScale;
  v_responsiveHelperBox += boxOrigin * (responsiveBoxScale - 1.);
  #endif

  v_responsiveUV = uv;
  v_responsiveUV *= responsiveBoxScale;
  v_responsiveUV += boxOrigin * (responsiveBoxScale - 1.);
  v_responsiveUV += graphicOffset;
  v_responsiveUV /= u_scale;
  v_responsiveUV.x *= responsiveRatio;
  v_responsiveUV = graphicRotation * v_responsiveUV;
  v_responsiveUV.x /= responsiveRatio;

  // ===================================================


  // ===================================================
  // Sizing api for patterns
  // (treating graphics as a image u_worldWidth x u_worldHeight size)

  float patternBoxRatio = givenBoxSize.x / givenBoxSize.y;
  vec2 patternBoxGivenSize = vec2(
  (u_worldWidth == 0.) ? u_resolution.x : givenBoxSize.x,
  (u_worldHeight == 0.) ? u_resolution.y : givenBoxSize.y
  );
  patternBoxRatio = patternBoxGivenSize.x / patternBoxGivenSize.y;

  vec3 boxSizeData = getBoxSize(patternBoxRatio, patternBoxGivenSize);
  v_patternBoxSize = boxSizeData.xy;
  float patternBoxNoFitBoxWidth = boxSizeData.z;
  vec2 patternBoxScale = u_resolution.xy / v_patternBoxSize;

  #ifdef ADD_HELPERS
  v_patternHelperBox = uv;
  v_patternHelperBox *= patternBoxScale;
  v_patternHelperBox += boxOrigin * (patternBoxScale - 1.);
  #endif

  v_patternUV = uv;
  v_patternUV += graphicOffset / patternBoxScale;
  v_patternUV += boxOrigin;
  v_patternUV -= boxOrigin / patternBoxScale;
  v_patternUV *= u_resolution.xy;
  v_patternUV /= u_pixelRatio;
  if (u_fit > 0.) {
    v_patternUV *= (patternBoxNoFitBoxWidth / v_patternBoxSize.x);
  }
  v_patternUV /= u_scale;
  v_patternUV = graphicRotation * v_patternUV;
  v_patternUV += boxOrigin / patternBoxScale;
  v_patternUV -= boxOrigin;
  // x100 is a default multiplier between vertex and fragmant shaders
  // we use it to avoid UV presision issues
  v_patternUV *= .01;

  // ===================================================


  // ===================================================
  // Sizing api for images

  vec2 imageBoxSize;
  if (u_fit == 1.) { // contain
    imageBoxSize.x = min(u_resolution.x / u_imageAspectRatio, u_resolution.y) * u_imageAspectRatio;
  } else if (u_fit == 2.) { // cover
    imageBoxSize.x = max(u_resolution.x / u_imageAspectRatio, u_resolution.y) * u_imageAspectRatio;
  } else {
    imageBoxSize.x = min(10.0, 10.0 / u_imageAspectRatio * u_imageAspectRatio);
  }
  imageBoxSize.y = imageBoxSize.x / u_imageAspectRatio;
  vec2 imageBoxScale = u_resolution.xy / imageBoxSize;

  #ifdef ADD_HELPERS
  vec2 imageHelperBox = uv;
  imageHelperBox *= imageBoxScale;
  imageHelperBox += boxOrigin * (imageBoxScale - 1.);
  #endif

  v_imageUV = uv;
  v_imageUV *= imageBoxScale;
  v_imageUV += boxOrigin * (imageBoxScale - 1.);
  v_imageUV += graphicOffset;
  v_imageUV /= u_scale;
  v_imageUV.x *= u_imageAspectRatio;
  v_imageUV = graphicRotation * v_imageUV;
  v_imageUV.x /= u_imageAspectRatio;

  v_imageUV += .5;
  v_imageUV.y = 1. - v_imageUV.y;

  // ===================================================

}`;
;
 //# sourceMappingURL=vertex-shader.js.map
}),
"[project]/node_modules/@paper-design/shaders/dist/shader-mount.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/* * * * * * * * * * * * * * * * * * * * * * * * * * * *
 *                    Paper Shaders                    *
 *       https://github.com/paper-design/shaders       *
 * * * * * * * * * * * * * * * * * * * * * * * * * * * */ __turbopack_context__.s([
    "ShaderMount",
    ()=>ShaderMount,
    "isPaperShaderElement",
    ()=>isPaperShaderElement
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$paper$2d$design$2f$shaders$2f$dist$2f$vertex$2d$shader$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@paper-design/shaders/dist/vertex-shader.js [app-ssr] (ecmascript)");
;
const DEFAULT_MAX_PIXEL_COUNT = 1920 * 1080 * 4;
class ShaderMount {
    parentElement;
    canvasElement;
    gl;
    program = null;
    uniformLocations = {};
    /** The fragment shader that we are using */ fragmentShader;
    /** Stores the RAF for the render loop */ rafId = null;
    /** Time of the last rendered frame */ lastRenderTime = 0;
    /** Total time that we have played any animation, passed as a uniform to the shader for time-based VFX */ currentFrame = 0;
    /** The current speed that we progress through animation time (multiplies by delta time every update). Allows negatives to play in reverse. If set to 0, rAF will stop entirely so static shaders have no recurring performance costs */ speed = 0;
    /** Uniforms that are provided by the user for the specific shader being mounted (not including uniforms that this Mount adds, like time and resolution) */ providedUniforms;
    /** Just a sanity check to make sure frames don't run after we're disposed */ hasBeenDisposed = false;
    /** If the resolution of the canvas has changed since the last render */ resolutionChanged = true;
    /** Store textures that are provided by the user */ textures = /* @__PURE__ */ new Map();
    minPixelRatio;
    maxPixelCount;
    isSafari = isSafari();
    uniformCache = {};
    textureUnitMap = /* @__PURE__ */ new Map();
    constructor(parentElement, fragmentShader, uniforms, webGlContextAttributes, speed = 0, frame = 0, minPixelRatio = 2, maxPixelCount = DEFAULT_MAX_PIXEL_COUNT){
        if (parentElement instanceof HTMLElement) {
            this.parentElement = parentElement;
        } else {
            throw new Error("Paper Shaders: parent element must be an HTMLElement");
        }
        if (!document.querySelector("style[data-paper-shader]")) {
            const styleElement = document.createElement("style");
            styleElement.innerHTML = defaultStyle;
            styleElement.setAttribute("data-paper-shader", "");
            document.head.prepend(styleElement);
        }
        const canvasElement = document.createElement("canvas");
        this.canvasElement = canvasElement;
        this.parentElement.prepend(canvasElement);
        this.fragmentShader = fragmentShader;
        this.providedUniforms = uniforms;
        this.currentFrame = frame;
        this.minPixelRatio = minPixelRatio;
        this.maxPixelCount = maxPixelCount;
        const gl = canvasElement.getContext("webgl2", webGlContextAttributes);
        if (!gl) {
            throw new Error("Paper Shaders: WebGL is not supported in this browser");
        }
        this.gl = gl;
        this.initProgram();
        this.setupPositionAttribute();
        this.setupUniforms();
        this.setUniformValues(this.providedUniforms);
        this.setupResizeObserver();
        visualViewport?.addEventListener("resize", this.handleVisualViewportChange);
        this.setSpeed(speed);
        this.parentElement.setAttribute("data-paper-shader", "");
        this.parentElement.paperShaderMount = this;
    }
    initProgram = ()=>{
        const program = createProgram(this.gl, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$paper$2d$design$2f$shaders$2f$dist$2f$vertex$2d$shader$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["vertexShaderSource"], this.fragmentShader);
        if (!program) return;
        this.program = program;
    };
    setupPositionAttribute = ()=>{
        const positionAttributeLocation = this.gl.getAttribLocation(this.program, "a_position");
        const positionBuffer = this.gl.createBuffer();
        this.gl.bindBuffer(this.gl.ARRAY_BUFFER, positionBuffer);
        const positions = [
            -1,
            -1,
            1,
            -1,
            -1,
            1,
            -1,
            1,
            1,
            -1,
            1,
            1
        ];
        this.gl.bufferData(this.gl.ARRAY_BUFFER, new Float32Array(positions), this.gl.STATIC_DRAW);
        this.gl.enableVertexAttribArray(positionAttributeLocation);
        this.gl.vertexAttribPointer(positionAttributeLocation, 2, this.gl.FLOAT, false, 0, 0);
    };
    setupUniforms = ()=>{
        const uniformLocations = {
            u_time: this.gl.getUniformLocation(this.program, "u_time"),
            u_pixelRatio: this.gl.getUniformLocation(this.program, "u_pixelRatio"),
            u_resolution: this.gl.getUniformLocation(this.program, "u_resolution")
        };
        Object.entries(this.providedUniforms).forEach(([key, value])=>{
            uniformLocations[key] = this.gl.getUniformLocation(this.program, key);
            if (value instanceof HTMLImageElement) {
                const aspectRatioUniformName = `${key}AspectRatio`;
                uniformLocations[aspectRatioUniformName] = this.gl.getUniformLocation(this.program, aspectRatioUniformName);
            }
        });
        this.uniformLocations = uniformLocations;
    };
    /**
   * The scale that we should render at.
   * - Used to target 2x rendering even on 1x screens for better antialiasing
   * - Prevents the virtual resolution from going beyond the maximum resolution
   * - Accounts for the page zoom level so we render in physical device pixels rather than CSS pixels
   */ renderScale = 1;
    parentWidth = 0;
    parentHeight = 0;
    parentDevicePixelWidth = 0;
    parentDevicePixelHeight = 0;
    devicePixelsSupported = false;
    resizeObserver = null;
    setupResizeObserver = ()=>{
        this.resizeObserver = new ResizeObserver(([entry])=>{
            if (entry?.borderBoxSize[0]) {
                const physicalPixelSize = entry.devicePixelContentBoxSize?.[0];
                if (physicalPixelSize !== void 0) {
                    this.devicePixelsSupported = true;
                    this.parentDevicePixelWidth = physicalPixelSize.inlineSize;
                    this.parentDevicePixelHeight = physicalPixelSize.blockSize;
                }
                this.parentWidth = entry.borderBoxSize[0].inlineSize;
                this.parentHeight = entry.borderBoxSize[0].blockSize;
            }
            this.handleResize();
        });
        this.resizeObserver.observe(this.parentElement);
    };
    // Visual viewport resize handler, mainly used to react to browser zoom changes.
    // Resize observer by itself does not react to pinch zoom, and although it usually
    // reacts to classic browser zoom, it's not guaranteed in edge cases.
    // Since timing between visual viewport changes and resize observer is complex
    // and because we'd like to know the device pixel sizes of elements, we just restart
    // the observer to get a guaranteed fresh callback regardless if it would have triggered or not.
    handleVisualViewportChange = ()=>{
        this.resizeObserver?.disconnect();
        this.setupResizeObserver();
    };
    /** Resize handler for when the container div changes size or the max pixel count changes and we want to resize our canvas to match */ handleResize = ()=>{
        let targetPixelWidth = 0;
        let targetPixelHeight = 0;
        const dpr = Math.max(1, window.devicePixelRatio);
        const pinchZoom = visualViewport?.scale ?? 1;
        if (this.devicePixelsSupported) {
            const scaleToMeetMinPixelRatio = Math.max(1, this.minPixelRatio / dpr);
            targetPixelWidth = this.parentDevicePixelWidth * scaleToMeetMinPixelRatio * pinchZoom;
            targetPixelHeight = this.parentDevicePixelHeight * scaleToMeetMinPixelRatio * pinchZoom;
        } else {
            let targetRenderScale = Math.max(dpr, this.minPixelRatio) * pinchZoom;
            if (this.isSafari) {
                const zoomLevel = bestGuessBrowserZoom();
                targetRenderScale *= Math.max(1, zoomLevel);
            }
            targetPixelWidth = Math.round(this.parentWidth) * targetRenderScale;
            targetPixelHeight = Math.round(this.parentHeight) * targetRenderScale;
        }
        const maxPixelCountHeadroom = Math.sqrt(this.maxPixelCount) / Math.sqrt(targetPixelWidth * targetPixelHeight);
        const scaleToMeetMaxPixelCount = Math.min(1, maxPixelCountHeadroom);
        const newWidth = Math.round(targetPixelWidth * scaleToMeetMaxPixelCount);
        const newHeight = Math.round(targetPixelHeight * scaleToMeetMaxPixelCount);
        const newRenderScale = newWidth / Math.round(this.parentWidth);
        if (this.canvasElement.width !== newWidth || this.canvasElement.height !== newHeight || this.renderScale !== newRenderScale) {
            this.renderScale = newRenderScale;
            this.canvasElement.width = newWidth;
            this.canvasElement.height = newHeight;
            this.resolutionChanged = true;
            this.gl.viewport(0, 0, this.gl.canvas.width, this.gl.canvas.height);
            this.render(performance.now());
        }
    };
    render = (currentTime)=>{
        if (this.hasBeenDisposed) return;
        if (this.program === null) {
            console.warn("Tried to render before program or gl was initialized");
            return;
        }
        const dt = currentTime - this.lastRenderTime;
        this.lastRenderTime = currentTime;
        if (this.speed !== 0) {
            this.currentFrame += dt * this.speed;
        }
        this.gl.clear(this.gl.COLOR_BUFFER_BIT);
        this.gl.useProgram(this.program);
        this.gl.uniform1f(this.uniformLocations.u_time, this.currentFrame * 1e-3);
        if (this.resolutionChanged) {
            this.gl.uniform2f(this.uniformLocations.u_resolution, this.gl.canvas.width, this.gl.canvas.height);
            this.gl.uniform1f(this.uniformLocations.u_pixelRatio, this.renderScale);
            this.resolutionChanged = false;
        }
        this.gl.drawArrays(this.gl.TRIANGLES, 0, 6);
        if (this.speed !== 0) {
            this.requestRender();
        } else {
            this.rafId = null;
        }
    };
    requestRender = ()=>{
        if (this.rafId !== null) {
            cancelAnimationFrame(this.rafId);
        }
        this.rafId = requestAnimationFrame(this.render);
    };
    /** Creates a texture from an image and sets it into a uniform value */ setTextureUniform = (uniformName, image)=>{
        if (!image.complete || image.naturalWidth === 0) {
            throw new Error(`Paper Shaders: image for uniform ${uniformName} must be fully loaded`);
        }
        const existingTexture = this.textures.get(uniformName);
        if (existingTexture) {
            this.gl.deleteTexture(existingTexture);
        }
        if (!this.textureUnitMap.has(uniformName)) {
            this.textureUnitMap.set(uniformName, this.textureUnitMap.size);
        }
        const textureUnit = this.textureUnitMap.get(uniformName);
        this.gl.activeTexture(this.gl.TEXTURE0 + textureUnit);
        const texture = this.gl.createTexture();
        this.gl.bindTexture(this.gl.TEXTURE_2D, texture);
        this.gl.texParameteri(this.gl.TEXTURE_2D, this.gl.TEXTURE_WRAP_S, this.gl.CLAMP_TO_EDGE);
        this.gl.texParameteri(this.gl.TEXTURE_2D, this.gl.TEXTURE_WRAP_T, this.gl.CLAMP_TO_EDGE);
        this.gl.texParameteri(this.gl.TEXTURE_2D, this.gl.TEXTURE_MIN_FILTER, this.gl.LINEAR);
        this.gl.texParameteri(this.gl.TEXTURE_2D, this.gl.TEXTURE_MAG_FILTER, this.gl.LINEAR);
        this.gl.texImage2D(this.gl.TEXTURE_2D, 0, this.gl.RGBA, this.gl.RGBA, this.gl.UNSIGNED_BYTE, image);
        const error = this.gl.getError();
        if (error !== this.gl.NO_ERROR || texture === null) {
            console.error("Paper Shaders: WebGL error when uploading texture:", error);
            return;
        }
        this.textures.set(uniformName, texture);
        const location = this.uniformLocations[uniformName];
        if (location) {
            this.gl.uniform1i(location, textureUnit);
            const aspectRatioUniformName = `${uniformName}AspectRatio`;
            const aspectRatioLocation = this.uniformLocations[aspectRatioUniformName];
            if (aspectRatioLocation) {
                const aspectRatio = image.naturalWidth / image.naturalHeight;
                this.gl.uniform1f(aspectRatioLocation, aspectRatio);
            }
        }
    };
    /** Utility: recursive equality test for all the uniforms */ areUniformValuesEqual = (a, b)=>{
        if (a === b) return true;
        if (Array.isArray(a) && Array.isArray(b) && a.length === b.length) {
            return a.every((val, i)=>this.areUniformValuesEqual(val, b[i]));
        }
        return false;
    };
    /** Sets the provided uniform values into the WebGL program, can be a partial list of uniforms that have changed */ setUniformValues = (updatedUniforms)=>{
        this.gl.useProgram(this.program);
        Object.entries(updatedUniforms).forEach(([key, value])=>{
            let cacheValue = value;
            if (value instanceof HTMLImageElement) {
                cacheValue = `${value.src.slice(0, 200)}|${value.naturalWidth}x${value.naturalHeight}`;
            }
            if (this.areUniformValuesEqual(this.uniformCache[key], cacheValue)) return;
            this.uniformCache[key] = cacheValue;
            const location = this.uniformLocations[key];
            if (!location) {
                console.warn(`Uniform location for ${key} not found`);
                return;
            }
            if (value instanceof HTMLImageElement) {
                this.setTextureUniform(key, value);
            } else if (Array.isArray(value)) {
                let flatArray = null;
                let valueLength = null;
                if (value[0] !== void 0 && Array.isArray(value[0])) {
                    const firstChildLength = value[0].length;
                    if (value.every((arr)=>arr.length === firstChildLength)) {
                        flatArray = value.flat();
                        valueLength = firstChildLength;
                    } else {
                        console.warn(`All child arrays must be the same length for ${key}`);
                        return;
                    }
                } else {
                    flatArray = value;
                    valueLength = flatArray.length;
                }
                switch(valueLength){
                    case 2:
                        this.gl.uniform2fv(location, flatArray);
                        break;
                    case 3:
                        this.gl.uniform3fv(location, flatArray);
                        break;
                    case 4:
                        this.gl.uniform4fv(location, flatArray);
                        break;
                    case 9:
                        this.gl.uniformMatrix3fv(location, false, flatArray);
                        break;
                    case 16:
                        this.gl.uniformMatrix4fv(location, false, flatArray);
                        break;
                    default:
                        console.warn(`Unsupported uniform array length: ${valueLength}`);
                }
            } else if (typeof value === "number") {
                this.gl.uniform1f(location, value);
            } else if (typeof value === "boolean") {
                this.gl.uniform1i(location, value ? 1 : 0);
            } else {
                console.warn(`Unsupported uniform type for ${key}: ${typeof value}`);
            }
        });
    };
    /** Gets the current total animation time from 0ms */ getCurrentFrame = ()=>{
        return this.currentFrame;
    };
    /** Set a frame to get a deterministic result, frames are literally just milliseconds from zero since the animation started */ setFrame = (newFrame)=>{
        this.currentFrame = newFrame;
        this.lastRenderTime = performance.now();
        this.render(performance.now());
    };
    /** Set an animation speed (or 0 to stop animation) */ setSpeed = (newSpeed = 1)=>{
        this.speed = newSpeed;
        if (this.rafId === null && newSpeed !== 0) {
            this.lastRenderTime = performance.now();
            this.rafId = requestAnimationFrame(this.render);
        }
        if (this.rafId !== null && newSpeed === 0) {
            cancelAnimationFrame(this.rafId);
            this.rafId = null;
        }
    };
    /** Set the maximum pixel count for the shader, this will limit the number of pixels that will be rendered */ setMaxPixelCount = (newMaxPixelCount = DEFAULT_MAX_PIXEL_COUNT)=>{
        this.maxPixelCount = newMaxPixelCount;
        this.handleResize();
    };
    /** Set the minimum pixel ratio for the shader */ setMinPixelRatio = (newMinPixelRatio = 2)=>{
        this.minPixelRatio = newMinPixelRatio;
        this.handleResize();
    };
    /** Update the uniforms that are provided by the outside shader, can be a partial set with only the uniforms that have changed */ setUniforms = (newUniforms)=>{
        this.setUniformValues(newUniforms);
        this.providedUniforms = {
            ...this.providedUniforms,
            ...newUniforms
        };
        this.render(performance.now());
    };
    /** Dispose of the shader mount, cleaning up all of the WebGL resources */ dispose = ()=>{
        this.hasBeenDisposed = true;
        if (this.rafId !== null) {
            cancelAnimationFrame(this.rafId);
            this.rafId = null;
        }
        if (this.gl && this.program) {
            this.textures.forEach((texture)=>{
                this.gl.deleteTexture(texture);
            });
            this.textures.clear();
            this.gl.deleteProgram(this.program);
            this.program = null;
            this.gl.bindBuffer(this.gl.ARRAY_BUFFER, null);
            this.gl.bindBuffer(this.gl.ELEMENT_ARRAY_BUFFER, null);
            this.gl.bindRenderbuffer(this.gl.RENDERBUFFER, null);
            this.gl.bindFramebuffer(this.gl.FRAMEBUFFER, null);
            this.gl.getError();
        }
        if (this.resizeObserver) {
            this.resizeObserver.disconnect();
            this.resizeObserver = null;
        }
        visualViewport?.removeEventListener("resize", this.handleVisualViewportChange);
        this.uniformLocations = {};
        this.parentElement.paperShaderMount = void 0;
    };
}
function createShader(gl, type, source) {
    const shader = gl.createShader(type);
    if (!shader) return null;
    gl.shaderSource(shader, source);
    gl.compileShader(shader);
    if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
        console.error("An error occurred compiling the shaders: " + gl.getShaderInfoLog(shader));
        gl.deleteShader(shader);
        return null;
    }
    return shader;
}
function createProgram(gl, vertexShaderSource2, fragmentShaderSource) {
    const format = gl.getShaderPrecisionFormat(gl.FRAGMENT_SHADER, gl.MEDIUM_FLOAT);
    const precision = format ? format.precision : null;
    if (precision && precision < 23) {
        vertexShaderSource2 = vertexShaderSource2.replace(/precision\s+(lowp|mediump)\s+float;/g, "precision highp float;");
        fragmentShaderSource = fragmentShaderSource.replace(/precision\s+(lowp|mediump)\s+float/g, "precision highp float").replace(/\b(uniform|varying|attribute)\s+(lowp|mediump)\s+(\w+)/g, "$1 highp $3");
    }
    const vertexShader = createShader(gl, gl.VERTEX_SHADER, vertexShaderSource2);
    const fragmentShader = createShader(gl, gl.FRAGMENT_SHADER, fragmentShaderSource);
    if (!vertexShader || !fragmentShader) return null;
    const program = gl.createProgram();
    if (!program) return null;
    gl.attachShader(program, vertexShader);
    gl.attachShader(program, fragmentShader);
    gl.linkProgram(program);
    if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
        console.error("Unable to initialize the shader program: " + gl.getProgramInfoLog(program));
        gl.deleteProgram(program);
        gl.deleteShader(vertexShader);
        gl.deleteShader(fragmentShader);
        return null;
    }
    gl.detachShader(program, vertexShader);
    gl.detachShader(program, fragmentShader);
    gl.deleteShader(vertexShader);
    gl.deleteShader(fragmentShader);
    return program;
}
const defaultStyle = `@layer paper-shaders {
  :where([data-paper-shader]) {
    isolation: isolate;
    position: relative;

    & canvas {
      contain: strict;
      display: block;
      position: absolute;
      inset: 0;
      z-index: -1;
      width: 100%;
      height: 100%;
      border-radius: inherit;
      corner-shape: inherit;
    }
  }
}`;
function isPaperShaderElement(element) {
    return "paperShaderMount" in element;
}
function isSafari() {
    const ua = navigator.userAgent.toLowerCase();
    return ua.includes("safari") && !ua.includes("chrome") && !ua.includes("android");
}
function bestGuessBrowserZoom() {
    const viewportScale = visualViewport?.scale ?? 1;
    const viewportWidth = visualViewport?.width ?? window.innerWidth;
    const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
    const innerWidth = viewportScale * viewportWidth + scrollbarWidth;
    const ratio = outerWidth / innerWidth;
    const zoomPercentageRounded = Math.round(100 * ratio);
    if (zoomPercentageRounded % 5 === 0) {
        return zoomPercentageRounded / 100;
    }
    if (zoomPercentageRounded === 33) {
        return 1 / 3;
    }
    if (zoomPercentageRounded === 67) {
        return 2 / 3;
    }
    if (zoomPercentageRounded === 133) {
        return 4 / 3;
    }
    return ratio;
}
;
 //# sourceMappingURL=shader-mount.js.map
}),
"[project]/node_modules/@paper-design/shaders-react/dist/use-merge-refs.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/* * * * * * * * * * * * * * * * * * * * * * * * * * * *
 *                    Paper Shaders                    *
 *       https://github.com/paper-design/shaders       *
 * * * * * * * * * * * * * * * * * * * * * * * * * * * */ __turbopack_context__.s([
    "useMergeRefs",
    ()=>useMergeRefs
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
;
function useMergeRefs(refs) {
    const cleanupRef = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"](void 0);
    const refEffect = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"]((instance)=>{
        const cleanups = refs.map((ref)=>{
            if (ref == null) {
                return;
            }
            if (typeof ref === "function") {
                const refCallback = ref;
                const refCleanup = refCallback(instance);
                return typeof refCleanup === "function" ? refCleanup : ()=>{
                    refCallback(null);
                };
            }
            ref.current = instance;
            return ()=>{
                ref.current = null;
            };
        });
        return ()=>{
            cleanups.forEach((refCleanup)=>refCleanup?.());
        };
    }, refs);
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"](()=>{
        if (refs.every((ref)=>ref == null)) {
            return null;
        }
        return (value)=>{
            if (cleanupRef.current) {
                cleanupRef.current();
                cleanupRef.current = void 0;
            }
            if (value != null) {
                cleanupRef.current = refEffect(value);
            }
        };
    }, refs);
}
;
 //# sourceMappingURL=use-merge-refs.js.map
}),
"[project]/node_modules/@paper-design/shaders-react/dist/shader-mount.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/* * * * * * * * * * * * * * * * * * * * * * * * * * * *
 *                    Paper Shaders                    *
 *       https://github.com/paper-design/shaders       *
 * * * * * * * * * * * * * * * * * * * * * * * * * * * */ __turbopack_context__.s([
    "ShaderMount",
    ()=>ShaderMount
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$paper$2d$design$2f$shaders$2f$dist$2f$shader$2d$mount$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@paper-design/shaders/dist/shader-mount.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$paper$2d$design$2f$shaders$2d$react$2f$dist$2f$use$2d$merge$2d$refs$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@paper-design/shaders-react/dist/use-merge-refs.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-runtime.js [app-ssr] (ecmascript)");
"use client";
;
;
;
;
async function processUniforms(uniformsProp) {
    const processedUniforms = {};
    const imageLoadPromises = [];
    const isValidUrl = (url)=>{
        try {
            if (url.startsWith("/")) return true;
            new URL(url);
            return true;
        } catch  {
            return false;
        }
    };
    const isExternalUrl = (url)=>{
        try {
            if (url.startsWith("/")) return false;
            const urlObject = new URL(url, window.location.origin);
            return urlObject.origin !== window.location.origin;
        } catch  {
            return false;
        }
    };
    Object.entries(uniformsProp).forEach(([key, value])=>{
        if (typeof value === "string") {
            if (!isValidUrl(value)) {
                console.warn(`Uniform "${key}" has invalid URL "${value}". Skipping image loading.`);
                return;
            }
            const imagePromise = new Promise((resolve, reject)=>{
                const img = new Image();
                if (isExternalUrl(value)) {
                    img.crossOrigin = "anonymous";
                }
                img.onload = ()=>{
                    processedUniforms[key] = img;
                    resolve();
                };
                img.onerror = ()=>{
                    console.error(`Could not set uniforms. Failed to load image at ${value}`);
                    reject();
                };
                img.src = value;
            });
            imageLoadPromises.push(imagePromise);
        } else {
            processedUniforms[key] = value;
        }
    });
    await Promise.all(imageLoadPromises);
    return processedUniforms;
}
const ShaderMount = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"])(function ShaderMountImpl({ fragmentShader, uniforms: uniformsProp, webGlContextAttributes, speed = 0, frame = 0, width, height, minPixelRatio, maxPixelCount, style, ...divProps }, forwardedRef) {
    const [isInitialized, setIsInitialized] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const divRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const shaderMountRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const initShader = async ()=>{
            const uniforms = await processUniforms(uniformsProp);
            if (divRef.current && !shaderMountRef.current) {
                shaderMountRef.current = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$paper$2d$design$2f$shaders$2f$dist$2f$shader$2d$mount$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ShaderMount"](divRef.current, fragmentShader, uniforms, webGlContextAttributes, speed, frame, minPixelRatio, maxPixelCount);
                setIsInitialized(true);
            }
        };
        initShader();
        return ()=>{
            shaderMountRef.current?.dispose();
            shaderMountRef.current = null;
        };
    }, [
        fragmentShader,
        webGlContextAttributes
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        let isStale = false;
        const updateUniforms = async ()=>{
            const uniforms = await processUniforms(uniformsProp);
            if (!isStale) {
                shaderMountRef.current?.setUniforms(uniforms);
            }
        };
        updateUniforms();
        return ()=>{
            isStale = true;
        };
    }, [
        uniformsProp,
        isInitialized
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        shaderMountRef.current?.setSpeed(speed);
    }, [
        speed,
        isInitialized
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        shaderMountRef.current?.setMaxPixelCount(maxPixelCount);
    }, [
        maxPixelCount,
        isInitialized
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        shaderMountRef.current?.setMinPixelRatio(minPixelRatio);
    }, [
        minPixelRatio,
        isInitialized
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        shaderMountRef.current?.setFrame(frame);
    }, [
        frame,
        isInitialized
    ]);
    const mergedRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$paper$2d$design$2f$shaders$2d$react$2f$dist$2f$use$2d$merge$2d$refs$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMergeRefs"])([
        divRef,
        forwardedRef
    ]);
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])("div", {
        ref: mergedRef,
        style: width !== void 0 || height !== void 0 ? {
            width,
            height,
            ...style
        } : style,
        ...divProps
    });
});
ShaderMount.displayName = "ShaderMount";
;
 //# sourceMappingURL=shader-mount.js.map
}),
"[project]/node_modules/@paper-design/shaders-react/dist/color-props-are-equal.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/* * * * * * * * * * * * * * * * * * * * * * * * * * * *
 *                    Paper Shaders                    *
 *       https://github.com/paper-design/shaders       *
 * * * * * * * * * * * * * * * * * * * * * * * * * * * */ __turbopack_context__.s([
    "colorPropsAreEqual",
    ()=>colorPropsAreEqual
]);
function colorPropsAreEqual(prevProps, nextProps) {
    for(const key in prevProps){
        if (key === "colors") {
            const prevIsArray = Array.isArray(prevProps.colors);
            const nextIsArray = Array.isArray(nextProps.colors);
            if (!prevIsArray || !nextIsArray) {
                if (Object.is(prevProps.colors, nextProps.colors) === false) {
                    return false;
                }
                continue;
            }
            if (prevProps.colors?.length !== nextProps.colors?.length) {
                return false;
            }
            if (!prevProps.colors?.every((color, index)=>color === nextProps.colors?.[index])) {
                return false;
            }
            continue;
        }
        if (Object.is(prevProps[key], nextProps[key]) === false) {
            return false;
        }
    }
    return true;
}
;
 //# sourceMappingURL=color-props-are-equal.js.map
}),
"[project]/node_modules/@paper-design/shaders/dist/shader-sizing.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/* * * * * * * * * * * * * * * * * * * * * * * * * * * *
 *                    Paper Shaders                    *
 *       https://github.com/paper-design/shaders       *
 * * * * * * * * * * * * * * * * * * * * * * * * * * * */ __turbopack_context__.s([
    "ShaderFitOptions",
    ()=>ShaderFitOptions,
    "defaultObjectSizing",
    ()=>defaultObjectSizing,
    "defaultPatternSizing",
    ()=>defaultPatternSizing,
    "drawSizingHelpers",
    ()=>drawSizingHelpers,
    "sizingDebugVariablesDeclaration",
    ()=>sizingDebugVariablesDeclaration,
    "sizingUV",
    ()=>sizingUV,
    "sizingUniformsDeclaration",
    ()=>sizingUniformsDeclaration,
    "sizingVariablesDeclaration",
    ()=>sizingVariablesDeclaration
]);
const sizingVariablesDeclaration = `
in vec2 v_objectUV;
in vec2 v_responsiveUV;
in vec2 v_responsiveBoxGivenSize;
in vec2 v_patternUV;
in vec2 v_imageUV;`;
const sizingDebugVariablesDeclaration = `
in vec2 v_objectBoxSize;
in vec2 v_objectHelperBox;
in vec2 v_responsiveBoxSize;
in vec2 v_responsiveHelperBox;
in vec2 v_patternBoxSize;
in vec2 v_patternHelperBox;`;
const sizingUniformsDeclaration = `
uniform float u_originX;
uniform float u_originY;
uniform float u_worldWidth;
uniform float u_worldHeight;
uniform float u_fit;

uniform float u_scale;
uniform float u_rotation;
uniform float u_offsetX;
uniform float u_offsetY;`;
const sizingUV = `

  vec2 uv = gl_FragCoord.xy / u_resolution.xy;
  #ifdef USE_PIXELIZATION
    float pxSize = u_pxSize * u_pixelRatio;
    vec2 pxSizeUv = gl_FragCoord.xy;
    pxSizeUv -= .5 * u_resolution;
    pxSizeUv /= pxSize;
    uv = floor(pxSizeUv) * pxSize / u_resolution.xy;    
    uv += .5;
  #endif
  uv -= .5;

  
  // ===================================================
  // sizing params shared between objects and patterns
  
  vec2 boxOrigin = vec2(.5 - u_originX, u_originY - .5);
  vec2 givenBoxSize = vec2(u_worldWidth, u_worldHeight);
  givenBoxSize = max(givenBoxSize, vec2(1.)) * u_pixelRatio;
  float r = u_rotation * 3.14159265358979323846 / 180.;
  mat2 graphicRotation = mat2(cos(r), sin(r), -sin(r), cos(r));
  vec2 graphicOffset = vec2(-u_offsetX, u_offsetY);

  
  // ===================================================
  // Sizing api for objects (graphics with fixed ratio)

  #ifdef USE_OBJECT_SIZING
    float fixedRatio = 1.;
    vec2 fixedRatioBoxGivenSize = vec2(
      (u_worldWidth == 0.) ? u_resolution.x : givenBoxSize.x,
      (u_worldHeight == 0.) ? u_resolution.y : givenBoxSize.y
    );
    vec2 objectBoxSize = vec2(0.);
    // fit = none
    objectBoxSize.x = fixedRatio * min(fixedRatioBoxGivenSize.x / fixedRatio, fixedRatioBoxGivenSize.y);
    if (u_fit == 1.) { // fit = contain
      objectBoxSize.x = fixedRatio * min(u_resolution.x / fixedRatio, u_resolution.y);
    } else if (u_fit == 2.) {  // fit = cover
      objectBoxSize.x = fixedRatio * max(u_resolution.x / fixedRatio, u_resolution.y);
    }
    objectBoxSize.y = objectBoxSize.x / fixedRatio;
    vec2 objectWorldScale = u_resolution.xy / objectBoxSize;
  
    #ifdef ADD_HELPERS
      vec2 objectHelperBox = gl_FragCoord.xy / u_resolution.xy;
      objectHelperBox -= .5;
      objectHelperBox *= objectWorldScale;
      objectHelperBox += boxOrigin * (objectWorldScale - 1.);  
    #endif
  
    vec2 objectUV = uv;
    objectUV *= objectWorldScale;
    objectUV += boxOrigin * (objectWorldScale - 1.);
    objectUV += vec2(-u_offsetX, u_offsetY);
    objectUV /= u_scale;
    objectUV = graphicRotation * objectUV;
  #endif
  
  // ===================================================
 
  // ===================================================
  // Sizing api for patterns (graphics respecting u_worldWidth / u_worldHeight ratio)
  
  #ifdef USE_PATTERN_SIZING
    float patternBoxRatio = givenBoxSize.x / givenBoxSize.y;
    vec2 patternBoxGivenSize = vec2(
      (u_worldWidth == 0.) ? u_resolution.x : givenBoxSize.x,
      (u_worldHeight == 0.) ? u_resolution.y : givenBoxSize.y
    );
    vec2 patternBoxSize = vec2(0.);
    // fit = none
    patternBoxSize.x = patternBoxRatio * min(patternBoxGivenSize.x / patternBoxRatio, patternBoxGivenSize.y);
    float patternWorldNoFitBoxWidth = patternBoxSize.x;
    if (u_fit == 1.) {  // fit = contain
      patternBoxSize.x = patternBoxRatio * min(u_resolution.x / patternBoxRatio, u_resolution.y);
    } else if (u_fit == 2.) {  // fit = cover
      patternBoxSize.x = patternBoxRatio * max(u_resolution.x / patternBoxRatio, u_resolution.y);
    }
    patternBoxSize.y = patternBoxSize.x / patternBoxRatio;
    vec2 patternWorldScale = u_resolution.xy / patternBoxSize;
  
    #ifdef ADD_HELPERS  
      vec2 patternHelperBox = gl_FragCoord.xy / u_resolution.xy;
      patternHelperBox -= .5;
      patternHelperBox *= patternWorldScale;
      patternHelperBox += boxOrigin * (patternWorldScale - 1.);  
    #endif
  
    vec2 patternUV = uv;
    patternUV += vec2(-u_offsetX, u_offsetY) / patternWorldScale;
    patternUV += boxOrigin;
    patternUV -= boxOrigin / patternWorldScale;
    patternUV *= u_resolution.xy;
    patternUV /= u_pixelRatio;
    if (u_fit > 0.) {
      patternUV *= (patternWorldNoFitBoxWidth / patternBoxSize.x);
    }
    patternUV /= u_scale;
    patternUV = graphicRotation * patternUV;
    patternUV += boxOrigin / patternWorldScale;
    patternUV -= boxOrigin;
    patternUV += .5;
  #endif
    
  // ===================================================
 
  // ===================================================
  // Sizing api for image filters
  
  #ifdef USE_IMAGE_SIZING

    vec2 imageBoxSize;
    if (u_fit == 1.) { // contain
      imageBoxSize.x = min(u_resolution.x / u_imageAspectRatio, u_resolution.y) * u_imageAspectRatio;
    } else if (u_fit == 2.) { // cover
      imageBoxSize.x = max(u_resolution.x / u_imageAspectRatio, u_resolution.y) * u_imageAspectRatio;
    } else {
      imageBoxSize.x = min(10.0, 10.0 / u_imageAspectRatio * u_imageAspectRatio);
    }
    imageBoxSize.y = imageBoxSize.x / u_imageAspectRatio;
    vec2 imageBoxScale = u_resolution.xy / imageBoxSize;

    #ifdef ADD_HELPERS
      vec2 imageHelperBox = uv;
      imageHelperBox *= imageBoxScale;
      imageHelperBox += boxOrigin * (imageBoxScale - 1.);
    #endif

    vec2 imageUV = uv;
    imageUV *= imageBoxScale;
    imageUV += boxOrigin * (imageBoxScale - 1.);
    imageUV += graphicOffset;
    imageUV /= u_scale;
    imageUV.x *= u_imageAspectRatio;
    imageUV = graphicRotation * imageUV;
    imageUV.x /= u_imageAspectRatio;
    
    imageUV += .5;
    imageUV.y = 1. - imageUV.y;
  #endif
`;
const drawSizingHelpers = `
  vec2 worldBoxDist = abs(helperBox);
  float boxStroke = (step(max(worldBoxDist.x, worldBoxDist.y), .5) - step(max(worldBoxDist.x, worldBoxDist.y), .495));
  color.rgb = mix(color.rgb, vec3(1., 0., 0.), boxStroke);
  opacity += boxStroke;

  vec2 boxOriginCopy = vec2(.5 - u_originX, u_originY - .5);
  vec2 boxOriginDist = helperBox + boxOriginCopy;
  boxOriginDist.x *= (boxSize.x / boxSize.y);
  float boxOriginPoint = 1. - smoothstep(0., .05, length(boxOriginDist));
  
  vec2 graphicOriginPointDist = helperBox + vec2(-u_offsetX, u_offsetY);
  graphicOriginPointDist.x *= (boxSize.x / boxSize.y);
  float graphicOriginPoint = 1. - smoothstep(0., .05, length(graphicOriginPointDist));
  
  color.rgb = mix(color.rgb, vec3(0., 1., 0.), boxOriginPoint);
  opacity += boxOriginPoint;
  color.rgb = mix(color.rgb, vec3(0., 0., 1.), graphicOriginPoint);
  opacity += graphicOriginPoint;
`;
const defaultObjectSizing = {
    fit: "contain",
    scale: 1,
    rotation: 0,
    offsetX: 0,
    offsetY: 0,
    originX: 0.5,
    originY: 0.5,
    worldWidth: 0,
    worldHeight: 0
};
const defaultPatternSizing = {
    fit: "none",
    scale: 1,
    rotation: 0,
    offsetX: 0,
    offsetY: 0,
    originX: 0.5,
    originY: 0.5,
    worldWidth: 0,
    worldHeight: 0
};
const ShaderFitOptions = {
    none: 0,
    contain: 1,
    cover: 2
};
;
 //# sourceMappingURL=shader-sizing.js.map
}),
"[project]/node_modules/@paper-design/shaders/dist/get-shader-color-from-string.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/* * * * * * * * * * * * * * * * * * * * * * * * * * * *
 *                    Paper Shaders                    *
 *       https://github.com/paper-design/shaders       *
 * * * * * * * * * * * * * * * * * * * * * * * * * * * */ __turbopack_context__.s([
    "clamp",
    ()=>clamp,
    "getShaderColorFromString",
    ()=>getShaderColorFromString
]);
function getShaderColorFromString(colorString) {
    if (Array.isArray(colorString)) {
        if (colorString.length === 4) return colorString;
        if (colorString.length === 3) return [
            ...colorString,
            1
        ];
        return fallbackColor;
    }
    if (typeof colorString !== "string") {
        return fallbackColor;
    }
    let r, g, b, a = 1;
    if (colorString.startsWith("#")) {
        [r, g, b, a] = hexToRgba(colorString);
    } else if (colorString.startsWith("rgb")) {
        [r, g, b, a] = parseRgba(colorString);
    } else if (colorString.startsWith("hsl")) {
        [r, g, b, a] = hslaToRgba(parseHsla(colorString));
    } else {
        console.error("Unsupported color format", colorString);
        return fallbackColor;
    }
    return [
        clamp(r, 0, 1),
        clamp(g, 0, 1),
        clamp(b, 0, 1),
        clamp(a, 0, 1)
    ];
}
function hexToRgba(hex) {
    hex = hex.replace(/^#/, "");
    if (hex.length === 3) {
        hex = hex.split("").map((char)=>char + char).join("");
    }
    if (hex.length === 6) {
        hex = hex + "ff";
    }
    const r = parseInt(hex.slice(0, 2), 16) / 255;
    const g = parseInt(hex.slice(2, 4), 16) / 255;
    const b = parseInt(hex.slice(4, 6), 16) / 255;
    const a = parseInt(hex.slice(6, 8), 16) / 255;
    return [
        r,
        g,
        b,
        a
    ];
}
function parseRgba(rgba) {
    const match = rgba.match(/^rgba?\s*\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*([0-9.]+))?\s*\)$/i);
    if (!match) return [
        0,
        0,
        0,
        1
    ];
    return [
        parseInt(match[1] ?? "0") / 255,
        parseInt(match[2] ?? "0") / 255,
        parseInt(match[3] ?? "0") / 255,
        match[4] === void 0 ? 1 : parseFloat(match[4])
    ];
}
function parseHsla(hsla) {
    const match = hsla.match(/^hsla?\s*\(\s*(\d+)\s*,\s*(\d+)%\s*,\s*(\d+)%\s*(?:,\s*([0-9.]+))?\s*\)$/i);
    if (!match) return [
        0,
        0,
        0,
        1
    ];
    return [
        parseInt(match[1] ?? "0"),
        parseInt(match[2] ?? "0"),
        parseInt(match[3] ?? "0"),
        match[4] === void 0 ? 1 : parseFloat(match[4])
    ];
}
function hslaToRgba(hsla) {
    const [h, s, l, a] = hsla;
    const hDecimal = h / 360;
    const sDecimal = s / 100;
    const lDecimal = l / 100;
    let r, g, b;
    if (s === 0) {
        r = g = b = lDecimal;
    } else {
        const hue2rgb = (p2, q2, t)=>{
            if (t < 0) t += 1;
            if (t > 1) t -= 1;
            if (t < 1 / 6) return p2 + (q2 - p2) * 6 * t;
            if (t < 1 / 2) return q2;
            if (t < 2 / 3) return p2 + (q2 - p2) * (2 / 3 - t) * 6;
            return p2;
        };
        const q = lDecimal < 0.5 ? lDecimal * (1 + sDecimal) : lDecimal + sDecimal - lDecimal * sDecimal;
        const p = 2 * lDecimal - q;
        r = hue2rgb(p, q, hDecimal + 1 / 3);
        g = hue2rgb(p, q, hDecimal);
        b = hue2rgb(p, q, hDecimal - 1 / 3);
    }
    return [
        r,
        g,
        b,
        a
    ];
}
const clamp = (n, min, max)=>Math.min(Math.max(n, min), max);
const fallbackColor = [
    0,
    0,
    0,
    1
];
;
 //# sourceMappingURL=get-shader-color-from-string.js.map
}),
"[project]/node_modules/@paper-design/shaders/dist/shader-utils.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/* * * * * * * * * * * * * * * * * * * * * * * * * * * *
 *                    Paper Shaders                    *
 *       https://github.com/paper-design/shaders       *
 * * * * * * * * * * * * * * * * * * * * * * * * * * * */ __turbopack_context__.s([
    "colorBandingFix",
    ()=>colorBandingFix,
    "declarePI",
    ()=>declarePI,
    "fiberNoise",
    ()=>fiberNoise,
    "proceduralHash11",
    ()=>proceduralHash11,
    "proceduralHash21",
    ()=>proceduralHash21,
    "proceduralHash22",
    ()=>proceduralHash22,
    "rotation2",
    ()=>rotation2,
    "simplexNoise",
    ()=>simplexNoise,
    "textureRandomizerGB",
    ()=>textureRandomizerGB,
    "textureRandomizerR",
    ()=>textureRandomizerR
]);
const declarePI = `
#define TWO_PI 6.28318530718
#define PI 3.14159265358979323846
`;
const rotation2 = `
vec2 rotate(vec2 uv, float th) {
  return mat2(cos(th), sin(th), -sin(th), cos(th)) * uv;
}
`;
const proceduralHash11 = `
  float hash11(float p) {
    p = fract(p * 0.3183099) + 0.1;
    p *= p + 19.19;
    return fract(p * p);
  }
`;
const proceduralHash21 = `
  float hash21(vec2 p) {
    p = fract(p * vec2(0.3183099, 0.3678794)) + 0.1;
    p += dot(p, p + 19.19);
    return fract(p.x * p.y);
  }
`;
const proceduralHash22 = `
  vec2 hash22(vec2 p) {
    p = fract(p * vec2(0.3183099, 0.3678794)) + 0.1;
    p += dot(p, p.yx + 19.19);
    return fract(vec2(p.x * p.y, p.x + p.y));
  }
`;
const textureRandomizerR = `
  float randomR(vec2 p) {
    vec2 uv = floor(p) / 100. + .5;
    return texture(u_noiseTexture, fract(uv)).r;
  }
`;
const textureRandomizerGB = `
  vec2 randomGB(vec2 p) {
    vec2 uv = floor(p) / 100. + .5;
    return texture(u_noiseTexture, fract(uv)).gb;
  }
`;
const colorBandingFix = `
  color += 1. / 256. * (fract(sin(dot(.014 * gl_FragCoord.xy, vec2(12.9898, 78.233))) * 43758.5453123) - .5);
`;
const simplexNoise = `
vec3 permute(vec3 x) { return mod(((x * 34.0) + 1.0) * x, 289.0); }
float snoise(vec2 v) {
  const vec4 C = vec4(0.211324865405187, 0.366025403784439,
    -0.577350269189626, 0.024390243902439);
  vec2 i = floor(v + dot(v, C.yy));
  vec2 x0 = v - i + dot(i, C.xx);
  vec2 i1;
  i1 = (x0.x > x0.y) ? vec2(1.0, 0.0) : vec2(0.0, 1.0);
  vec4 x12 = x0.xyxy + C.xxzz;
  x12.xy -= i1;
  i = mod(i, 289.0);
  vec3 p = permute(permute(i.y + vec3(0.0, i1.y, 1.0))
    + i.x + vec3(0.0, i1.x, 1.0));
  vec3 m = max(0.5 - vec3(dot(x0, x0), dot(x12.xy, x12.xy),
      dot(x12.zw, x12.zw)), 0.0);
  m = m * m;
  m = m * m;
  vec3 x = 2.0 * fract(p * C.www) - 1.0;
  vec3 h = abs(x) - 0.5;
  vec3 ox = floor(x + 0.5);
  vec3 a0 = x - ox;
  m *= 1.79284291400159 - 0.85373472095314 * (a0 * a0 + h * h);
  vec3 g;
  g.x = a0.x * x0.x + h.x * x0.y;
  g.yz = a0.yz * x12.xz + h.yz * x12.yw;
  return 130.0 * dot(m, g);
}
`;
const fiberNoise = `
float fiberRandom(vec2 p) {
  vec2 uv = floor(p) / 100.;
  return texture(u_noiseTexture, fract(uv)).b;
}

float fiberValueNoise(vec2 st) {
  vec2 i = floor(st);
  vec2 f = fract(st);
  float a = fiberRandom(i);
  float b = fiberRandom(i + vec2(1.0, 0.0));
  float c = fiberRandom(i + vec2(0.0, 1.0));
  float d = fiberRandom(i + vec2(1.0, 1.0));
  vec2 u = f * f * (3.0 - 2.0 * f);
  float x1 = mix(a, b, u.x);
  float x2 = mix(c, d, u.x);
  return mix(x1, x2, u.y);
}

float fiberNoiseFbm(in vec2 n, vec2 seedOffset) {
  float total = 0.0, amplitude = 1.;
  for (int i = 0; i < 4; i++) {
    n = rotate(n, .7);
    total += fiberValueNoise(n + seedOffset) * amplitude;
    n *= 2.;
    amplitude *= 0.6;
  }
  return total;
}

float fiberNoise(vec2 uv, vec2 seedOffset) {
  float epsilon = 0.001;
  float n1 = fiberNoiseFbm(uv + vec2(epsilon, 0.0), seedOffset);
  float n2 = fiberNoiseFbm(uv - vec2(epsilon, 0.0), seedOffset);
  float n3 = fiberNoiseFbm(uv + vec2(0.0, epsilon), seedOffset);
  float n4 = fiberNoiseFbm(uv - vec2(0.0, epsilon), seedOffset);
  return length(vec2(n1 - n2, n3 - n4)) / (2.0 * epsilon);
}
`;
;
 //# sourceMappingURL=shader-utils.js.map
}),
"[project]/node_modules/@paper-design/shaders/dist/shaders/mesh-gradient.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/* * * * * * * * * * * * * * * * * * * * * * * * * * * *
 *                    Paper Shaders                    *
 *       https://github.com/paper-design/shaders       *
 * * * * * * * * * * * * * * * * * * * * * * * * * * * */ __turbopack_context__.s([
    "meshGradientFragmentShader",
    ()=>meshGradientFragmentShader,
    "meshGradientMeta",
    ()=>meshGradientMeta
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$paper$2d$design$2f$shaders$2f$dist$2f$shader$2d$sizing$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@paper-design/shaders/dist/shader-sizing.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$paper$2d$design$2f$shaders$2f$dist$2f$shader$2d$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@paper-design/shaders/dist/shader-utils.js [app-ssr] (ecmascript)");
;
;
const meshGradientMeta = {
    maxColorCount: 10
};
const meshGradientFragmentShader = `#version 300 es
precision mediump float;

uniform float u_time;

uniform vec4 u_colors[${meshGradientMeta.maxColorCount}];
uniform float u_colorsCount;

uniform float u_distortion;
uniform float u_swirl;
uniform float u_grainMixer;
uniform float u_grainOverlay;

${__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$paper$2d$design$2f$shaders$2f$dist$2f$shader$2d$sizing$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["sizingVariablesDeclaration"]}
${__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$paper$2d$design$2f$shaders$2f$dist$2f$shader$2d$sizing$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["sizingDebugVariablesDeclaration"]}
${__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$paper$2d$design$2f$shaders$2f$dist$2f$shader$2d$sizing$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["sizingUniformsDeclaration"]}

out vec4 fragColor;

${__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$paper$2d$design$2f$shaders$2f$dist$2f$shader$2d$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["declarePI"]}
${__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$paper$2d$design$2f$shaders$2f$dist$2f$shader$2d$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["rotation2"]}
${__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$paper$2d$design$2f$shaders$2f$dist$2f$shader$2d$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["proceduralHash21"]}

float valueNoise(vec2 st) {
  vec2 i = floor(st);
  vec2 f = fract(st);
  float a = hash21(i);
  float b = hash21(i + vec2(1.0, 0.0));
  float c = hash21(i + vec2(0.0, 1.0));
  float d = hash21(i + vec2(1.0, 1.0));
  vec2 u = f * f * (3.0 - 2.0 * f);
  float x1 = mix(a, b, u.x);
  float x2 = mix(c, d, u.x);
  return mix(x1, x2, u.y);
}

float noise(vec2 n, vec2 seedOffset) {
  return valueNoise(n + seedOffset);
}

vec2 getPosition(int i, float t) {
  float a = float(i) * .37;
  float b = .6 + mod(float(i), 3.) * .3;
  float c = .8 + mod(float(i + 1), 4.) * 0.25;

  float x = sin(t * b + a);
  float y = cos(t * c + a * 1.5);

  return .5 + .5 * vec2(x, y);
}

void main() {
  vec2 shape_uv = v_objectUV;
  shape_uv += .5;

  vec2 grainUV = v_objectUV;
  // apply inverse transform to grain_uv so it respects the originXY
  float grainUVRot = u_rotation * 3.14159265358979323846 / 180.;
  mat2 graphicRotation = mat2(cos(grainUVRot), sin(grainUVRot), -sin(grainUVRot), cos(grainUVRot));
  vec2 graphicOffset = vec2(-u_offsetX, u_offsetY);
  grainUV = transpose(graphicRotation) * grainUV;
  grainUV *= u_scale;
  grainUV *= .7;
  grainUV -= graphicOffset;
  grainUV *= v_objectBoxSize;
  
  float grain = noise(grainUV, vec2(0.));
  float mixerGrain = .4 * u_grainMixer * (grain - .5);

  const float firstFrameOffset = 41.5;
  float t = .5 * (u_time + firstFrameOffset);

  float radius = smoothstep(0., 1., length(shape_uv - .5));
  float center = 1. - radius;
  for (float i = 1.; i <= 2.; i++) {
    shape_uv.x += u_distortion * center / i * sin(t + i * .4 * smoothstep(.0, 1., shape_uv.y)) * cos(.2 * t + i * 2.4 * smoothstep(.0, 1., shape_uv.y));
    shape_uv.y += u_distortion * center / i * cos(t + i * 2. * smoothstep(.0, 1., shape_uv.x));
  }

  vec2 uvRotated = shape_uv;
  uvRotated -= vec2(.5);
  float angle = 3. * u_swirl * radius;
  uvRotated = rotate(uvRotated, -angle);
  uvRotated += vec2(.5);

  vec3 color = vec3(0.);
  float opacity = 0.;
  float totalWeight = 0.;

  for (int i = 0; i < ${meshGradientMeta.maxColorCount}; i++) {
    if (i >= int(u_colorsCount)) break;

    vec2 pos = getPosition(i, t) + mixerGrain;
    vec3 colorFraction = u_colors[i].rgb * u_colors[i].a;
    float opacityFraction = u_colors[i].a;

    float dist = length(uvRotated - pos);

    dist = pow(dist, 3.5);
    float weight = 1. / (dist + 1e-3);
    color += colorFraction * weight;
    opacity += opacityFraction * weight;
    totalWeight += weight;
  }

  color /= totalWeight;
  opacity /= totalWeight;

  float rr = noise(rotate(grainUV, 1.), vec2(3.));
  float gg = noise(rotate(grainUV, 2.) + 10., vec2(-1.));
  float bb = noise(grainUV - 2., vec2(5.));
  vec3 grainColor = vec3(rr, gg, bb);
  color = mix(color, grainColor, .01 + .3 * u_grainOverlay);
  
  fragColor = vec4(color, opacity);
}
`;
;
 //# sourceMappingURL=mesh-gradient.js.map
}),
"[project]/node_modules/@paper-design/shaders-react/dist/shaders/mesh-gradient.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/* * * * * * * * * * * * * * * * * * * * * * * * * * * *
 *                    Paper Shaders                    *
 *       https://github.com/paper-design/shaders       *
 * * * * * * * * * * * * * * * * * * * * * * * * * * * */ __turbopack_context__.s([
    "MeshGradient",
    ()=>MeshGradient,
    "beachPreset",
    ()=>beachPreset,
    "defaultPreset",
    ()=>defaultPreset,
    "inkPreset",
    ()=>inkPreset,
    "meshGradientPresets",
    ()=>meshGradientPresets,
    "purplePreset",
    ()=>purplePreset
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$paper$2d$design$2f$shaders$2d$react$2f$dist$2f$shader$2d$mount$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@paper-design/shaders-react/dist/shader-mount.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$paper$2d$design$2f$shaders$2d$react$2f$dist$2f$color$2d$props$2d$are$2d$equal$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@paper-design/shaders-react/dist/color-props-are-equal.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$paper$2d$design$2f$shaders$2f$dist$2f$shader$2d$sizing$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@paper-design/shaders/dist/shader-sizing.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$paper$2d$design$2f$shaders$2f$dist$2f$get$2d$shader$2d$color$2d$from$2d$string$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@paper-design/shaders/dist/get-shader-color-from-string.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$paper$2d$design$2f$shaders$2f$dist$2f$shaders$2f$mesh$2d$gradient$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@paper-design/shaders/dist/shaders/mesh-gradient.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-runtime.js [app-ssr] (ecmascript)");
;
;
;
;
;
const defaultPreset = {
    name: "Default",
    params: {
        ...__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$paper$2d$design$2f$shaders$2f$dist$2f$shader$2d$sizing$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["defaultObjectSizing"],
        speed: 1,
        frame: 0,
        colors: [
            "#e0eaff",
            "#241d9a",
            "#f75092",
            "#9f50d3"
        ],
        distortion: 0.8,
        swirl: 0.1,
        grainMixer: 0,
        grainOverlay: 0
    }
};
const purplePreset = {
    name: "Purple",
    params: {
        ...__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$paper$2d$design$2f$shaders$2f$dist$2f$shader$2d$sizing$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["defaultObjectSizing"],
        speed: 0.6,
        frame: 0,
        colors: [
            "#aaa7d7",
            "#3c2b8e"
        ],
        distortion: 1,
        swirl: 1,
        grainMixer: 0,
        grainOverlay: 0
    }
};
const beachPreset = {
    name: "Beach",
    params: {
        ...__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$paper$2d$design$2f$shaders$2f$dist$2f$shader$2d$sizing$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["defaultObjectSizing"],
        speed: 0.1,
        frame: 0,
        colors: [
            "#bcecf6",
            "#00aaff",
            "#00f7ff",
            "#ffd447"
        ],
        distortion: 0.8,
        swirl: 0.35,
        grainMixer: 0,
        grainOverlay: 0
    }
};
const inkPreset = {
    name: "Ink",
    params: {
        ...__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$paper$2d$design$2f$shaders$2f$dist$2f$shader$2d$sizing$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["defaultObjectSizing"],
        speed: 1,
        frame: 0,
        colors: [
            "#ffffff",
            "#000000"
        ],
        distortion: 1,
        swirl: 0.2,
        rotation: 90,
        grainMixer: 0,
        grainOverlay: 0
    }
};
const meshGradientPresets = [
    defaultPreset,
    inkPreset,
    purplePreset,
    beachPreset
];
const MeshGradient = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["memo"])(function MeshGradientImpl({ // Own props
speed = defaultPreset.params.speed, frame = defaultPreset.params.frame, colors = defaultPreset.params.colors, distortion = defaultPreset.params.distortion, swirl = defaultPreset.params.swirl, grainMixer = defaultPreset.params.grainMixer, grainOverlay = defaultPreset.params.grainOverlay, // Sizing props
fit = defaultPreset.params.fit, rotation = defaultPreset.params.rotation, scale = defaultPreset.params.scale, originX = defaultPreset.params.originX, originY = defaultPreset.params.originY, offsetX = defaultPreset.params.offsetX, offsetY = defaultPreset.params.offsetY, worldWidth = defaultPreset.params.worldWidth, worldHeight = defaultPreset.params.worldHeight, ...props }) {
    const uniforms = {
        // Own uniforms
        u_colors: colors.map(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$paper$2d$design$2f$shaders$2f$dist$2f$get$2d$shader$2d$color$2d$from$2d$string$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getShaderColorFromString"]),
        u_colorsCount: colors.length,
        u_distortion: distortion,
        u_swirl: swirl,
        u_grainMixer: grainMixer,
        u_grainOverlay: grainOverlay,
        // Sizing uniforms
        u_fit: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$paper$2d$design$2f$shaders$2f$dist$2f$shader$2d$sizing$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ShaderFitOptions"][fit],
        u_rotation: rotation,
        u_scale: scale,
        u_offsetX: offsetX,
        u_offsetY: offsetY,
        u_originX: originX,
        u_originY: originY,
        u_worldWidth: worldWidth,
        u_worldHeight: worldHeight
    };
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$paper$2d$design$2f$shaders$2d$react$2f$dist$2f$shader$2d$mount$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ShaderMount"], {
        ...props,
        speed,
        frame,
        fragmentShader: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$paper$2d$design$2f$shaders$2f$dist$2f$shaders$2f$mesh$2d$gradient$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["meshGradientFragmentShader"],
        uniforms
    });
}, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$paper$2d$design$2f$shaders$2d$react$2f$dist$2f$color$2d$props$2d$are$2d$equal$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["colorPropsAreEqual"]);
;
 //# sourceMappingURL=mesh-gradient.js.map
}),
"[project]/node_modules/@paper-design/shaders/dist/get-shader-noise-texture.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/* * * * * * * * * * * * * * * * * * * * * * * * * * * *
 *                    Paper Shaders                    *
 *       https://github.com/paper-design/shaders       *
 * * * * * * * * * * * * * * * * * * * * * * * * * * * */ __turbopack_context__.s([
    "getShaderNoiseTexture",
    ()=>getShaderNoiseTexture
]);
function getShaderNoiseTexture() {
    if ("TURBOPACK compile-time truthy", 1) {
        console.warn("Paper Shaders: can\u2019t create a texture on the server");
        return void 0;
    }
    //TURBOPACK unreachable
    ;
    const noiseSrc = undefined;
    const img = undefined;
}
;
 //# sourceMappingURL=get-shader-noise-texture.js.map
}),
"[project]/node_modules/@paper-design/shaders/dist/shaders/dot-orbit.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/* * * * * * * * * * * * * * * * * * * * * * * * * * * *
 *                    Paper Shaders                    *
 *       https://github.com/paper-design/shaders       *
 * * * * * * * * * * * * * * * * * * * * * * * * * * * */ __turbopack_context__.s([
    "dotOrbitFragmentShader",
    ()=>dotOrbitFragmentShader,
    "dotOrbitMeta",
    ()=>dotOrbitMeta
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$paper$2d$design$2f$shaders$2f$dist$2f$shader$2d$sizing$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@paper-design/shaders/dist/shader-sizing.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$paper$2d$design$2f$shaders$2f$dist$2f$shader$2d$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@paper-design/shaders/dist/shader-utils.js [app-ssr] (ecmascript)");
;
;
const dotOrbitMeta = {
    maxColorCount: 10
};
const dotOrbitFragmentShader = `#version 300 es
precision mediump float;

uniform float u_time;

uniform sampler2D u_noiseTexture;

uniform vec4 u_colorBack;
uniform vec4 u_colors[${dotOrbitMeta.maxColorCount}];
uniform float u_colorsCount;
uniform float u_stepsPerColor;
uniform float u_size;
uniform float u_sizeRange;
uniform float u_spreading;

${__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$paper$2d$design$2f$shaders$2f$dist$2f$shader$2d$sizing$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["sizingVariablesDeclaration"]}

out vec4 fragColor;

${__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$paper$2d$design$2f$shaders$2f$dist$2f$shader$2d$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["declarePI"]}
${__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$paper$2d$design$2f$shaders$2f$dist$2f$shader$2d$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["rotation2"]}
${__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$paper$2d$design$2f$shaders$2f$dist$2f$shader$2d$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["textureRandomizerR"]}
${__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$paper$2d$design$2f$shaders$2f$dist$2f$shader$2d$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["textureRandomizerGB"]}


vec3 voronoiShape(vec2 uv, float time) {
  vec2 i_uv = floor(uv);
  vec2 f_uv = fract(uv);

  float spreading = .25 * clamp(u_spreading, 0., 1.);

  float minDist = 1.;
  vec2 randomizer = vec2(0.);
  for (int y = -1; y <= 1; y++) {
    for (int x = -1; x <= 1; x++) {
      vec2 tileOffset = vec2(float(x), float(y));
      vec2 rand = randomGB(i_uv + tileOffset);
      vec2 cellCenter = vec2(.5 + 1e-4);
      cellCenter += spreading * cos(time + TWO_PI * rand);
      cellCenter -= .5;
      cellCenter = rotate(cellCenter, randomR(vec2(rand.x, rand.y)) + .1 * time);
      cellCenter += .5;
      float dist = length(tileOffset + cellCenter - f_uv);
      if (dist < minDist) {
        minDist = dist;
        randomizer = rand;
      }
      minDist = min(minDist, dist);
    }
  }

  return vec3(minDist, randomizer);
}

void main() {

  vec2 shape_uv = v_patternUV;
  shape_uv *= 1.5;

  const float firstFrameOffset = -10.;
  float t = u_time + firstFrameOffset;

  vec3 voronoi = voronoiShape(shape_uv, t) + 1e-4;

  float radius = .25 * clamp(u_size, 0., 1.) - .5 * clamp(u_sizeRange, 0., 1.) * voronoi[2];
  float dist = voronoi[0];
  float edgeWidth = fwidth(dist);
  float dots = smoothstep(radius + edgeWidth, radius - edgeWidth, dist);

  float shape = voronoi[1];

  float mixer = shape * (u_colorsCount - 1.);
  mixer = (shape - .5 / u_colorsCount) * u_colorsCount;
  float steps = max(1., u_stepsPerColor);

  vec4 gradient = u_colors[0];
  gradient.rgb *= gradient.a;
  for (int i = 1; i < ${dotOrbitMeta.maxColorCount}; i++) {
      if (i >= int(u_colorsCount)) break;
      float localT = clamp(mixer - float(i - 1), 0.0, 1.0);
      localT = round(localT * steps) / steps;
      vec4 c = u_colors[i];
      c.rgb *= c.a;
      gradient = mix(gradient, c, localT);
  }

  if ((mixer < 0.) || (mixer > (u_colorsCount - 1.))) {
    float localT = mixer + 1.;
    if (mixer > (u_colorsCount - 1.)) {
      localT = mixer - (u_colorsCount - 1.);
    }
    localT = round(localT * steps) / steps;
    vec4 cFst = u_colors[0];
    cFst.rgb *= cFst.a;
    vec4 cLast = u_colors[int(u_colorsCount - 1.)];
    cLast.rgb *= cLast.a;
    gradient = mix(cLast, cFst, localT);
  }

  vec3 color = gradient.rgb * dots;
  float opacity = gradient.a * dots;

  vec3 bgColor = u_colorBack.rgb * u_colorBack.a;
  color = color + bgColor * (1. - opacity);
  opacity = opacity + u_colorBack.a * (1. - opacity);

  fragColor = vec4(color, opacity);
}
`;
;
 //# sourceMappingURL=dot-orbit.js.map
}),
"[project]/node_modules/@paper-design/shaders-react/dist/shaders/dot-orbit.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/* * * * * * * * * * * * * * * * * * * * * * * * * * * *
 *                    Paper Shaders                    *
 *       https://github.com/paper-design/shaders       *
 * * * * * * * * * * * * * * * * * * * * * * * * * * * */ __turbopack_context__.s([
    "DotOrbit",
    ()=>DotOrbit,
    "bubblesPreset",
    ()=>bubblesPreset,
    "defaultPreset",
    ()=>defaultPreset,
    "dotOrbitPresets",
    ()=>dotOrbitPresets,
    "hallucinatoryPreset",
    ()=>hallucinatoryPreset,
    "shinePreset",
    ()=>shinePreset
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$paper$2d$design$2f$shaders$2d$react$2f$dist$2f$shader$2d$mount$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@paper-design/shaders-react/dist/shader-mount.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$paper$2d$design$2f$shaders$2d$react$2f$dist$2f$color$2d$props$2d$are$2d$equal$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@paper-design/shaders-react/dist/color-props-are-equal.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$paper$2d$design$2f$shaders$2f$dist$2f$get$2d$shader$2d$color$2d$from$2d$string$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@paper-design/shaders/dist/get-shader-color-from-string.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$paper$2d$design$2f$shaders$2f$dist$2f$get$2d$shader$2d$noise$2d$texture$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@paper-design/shaders/dist/get-shader-noise-texture.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$paper$2d$design$2f$shaders$2f$dist$2f$shaders$2f$dot$2d$orbit$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@paper-design/shaders/dist/shaders/dot-orbit.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$paper$2d$design$2f$shaders$2f$dist$2f$shader$2d$sizing$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@paper-design/shaders/dist/shader-sizing.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-runtime.js [app-ssr] (ecmascript)");
;
;
;
;
;
const defaultPreset = {
    name: "Default",
    params: {
        ...__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$paper$2d$design$2f$shaders$2f$dist$2f$shader$2d$sizing$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["defaultPatternSizing"],
        speed: 1.5,
        frame: 0,
        colorBack: "#000000",
        colors: [
            "#ffc96b",
            "#ff6200",
            "#ff2f00",
            "#421100",
            "#1a0000"
        ],
        size: 1,
        sizeRange: 0,
        spreading: 1,
        stepsPerColor: 4
    }
};
const shinePreset = {
    name: "Shine",
    params: {
        ...__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$paper$2d$design$2f$shaders$2f$dist$2f$shader$2d$sizing$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["defaultPatternSizing"],
        speed: 0.1,
        frame: 0,
        colors: [
            "#ffffff",
            "#006aff",
            "#fff675"
        ],
        colorBack: "#000000",
        stepsPerColor: 4,
        size: 0.3,
        sizeRange: 0.2,
        spreading: 1,
        scale: 0.4
    }
};
const bubblesPreset = {
    name: "Bubbles",
    params: {
        ...__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$paper$2d$design$2f$shaders$2f$dist$2f$shader$2d$sizing$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["defaultPatternSizing"],
        speed: 0.4,
        frame: 0,
        colors: [
            "#D0D2D5"
        ],
        colorBack: "#989CA4",
        stepsPerColor: 2,
        size: 0.9,
        sizeRange: 0.7,
        spreading: 1,
        scale: 1.64
    }
};
const hallucinatoryPreset = {
    name: "Hallucinatory",
    params: {
        ...__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$paper$2d$design$2f$shaders$2f$dist$2f$shader$2d$sizing$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["defaultPatternSizing"],
        speed: 5,
        frame: 0,
        colors: [
            "#000000"
        ],
        colorBack: "#ffe500",
        stepsPerColor: 2,
        size: 0.65,
        sizeRange: 0,
        spreading: 0.3,
        scale: 0.5
    }
};
const dotOrbitPresets = [
    defaultPreset,
    bubblesPreset,
    shinePreset,
    hallucinatoryPreset
];
const DotOrbit = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["memo"])(function DotOrbitImpl({ // Own props
speed = defaultPreset.params.speed, frame = defaultPreset.params.frame, colorBack = defaultPreset.params.colorBack, colors = defaultPreset.params.colors, size = defaultPreset.params.size, sizeRange = defaultPreset.params.sizeRange, spreading = defaultPreset.params.spreading, stepsPerColor = defaultPreset.params.stepsPerColor, // Sizing props
fit = defaultPreset.params.fit, scale = defaultPreset.params.scale, rotation = defaultPreset.params.rotation, originX = defaultPreset.params.originX, originY = defaultPreset.params.originY, offsetX = defaultPreset.params.offsetX, offsetY = defaultPreset.params.offsetY, worldWidth = defaultPreset.params.worldWidth, worldHeight = defaultPreset.params.worldHeight, ...props }) {
    const uniforms = {
        // Own uniforms
        u_colorBack: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$paper$2d$design$2f$shaders$2f$dist$2f$get$2d$shader$2d$color$2d$from$2d$string$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getShaderColorFromString"])(colorBack),
        u_colors: colors.map(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$paper$2d$design$2f$shaders$2f$dist$2f$get$2d$shader$2d$color$2d$from$2d$string$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getShaderColorFromString"]),
        u_colorsCount: colors.length,
        u_size: size,
        u_sizeRange: sizeRange,
        u_spreading: spreading,
        u_stepsPerColor: stepsPerColor,
        u_noiseTexture: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$paper$2d$design$2f$shaders$2f$dist$2f$get$2d$shader$2d$noise$2d$texture$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getShaderNoiseTexture"])(),
        // Sizing uniforms
        u_fit: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$paper$2d$design$2f$shaders$2f$dist$2f$shader$2d$sizing$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ShaderFitOptions"][fit],
        u_scale: scale,
        u_rotation: rotation,
        u_offsetX: offsetX,
        u_offsetY: offsetY,
        u_originX: originX,
        u_originY: originY,
        u_worldWidth: worldWidth,
        u_worldHeight: worldHeight
    };
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$paper$2d$design$2f$shaders$2d$react$2f$dist$2f$shader$2d$mount$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ShaderMount"], {
        ...props,
        speed,
        frame,
        fragmentShader: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$paper$2d$design$2f$shaders$2f$dist$2f$shaders$2f$dot$2d$orbit$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["dotOrbitFragmentShader"],
        uniforms
    });
}, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$paper$2d$design$2f$shaders$2d$react$2f$dist$2f$color$2d$props$2d$are$2d$equal$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["colorPropsAreEqual"]);
;
 //# sourceMappingURL=dot-orbit.js.map
}),
];

//# sourceMappingURL=_3e3bfb10._.js.map