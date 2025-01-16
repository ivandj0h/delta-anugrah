"use client";

import React, { useEffect, useRef } from "react";

const Gradient = () => {
    const canvasRef = useRef(null);

    const col = (x, y, r, g, b) => {
        const $ = canvasRef.current.getContext("2d");
        $.fillStyle = "rgb(" + r + "," + g + "," + b + ")";
        $.fillRect(x, y, 1, 1);
    };

    var R = function (x, y, t) {
        return Math.floor(10 + 64 * Math.cos((x * x - y * y) / 300 + t));
    };

    var G = function (x, y, t) {
        return Math.floor(
            80 +
                64 *
                    Math.sin(
                        (x * x * Math.cos(t / 4) + y * y * Math.sin(t / 3)) /
                            800
                    )
        );
    };

    var B = function (x, y, t) {
        return Math.floor(
            255 +
                64 *
                    Math.sin(
                        5 * Math.sin(t / 9) +
                            ((x - 100) * (x - 100) + (y - 100) * (y - 100)) /
                                2000
                    )
        );
    };

    useEffect(() => {
        let t = 0;

        const run = () => {
            for (let x = 0; x <= 35; x++) {
                for (let y = 0; y <= 35; y++) {
                    col(x, y, R(x, y, t), G(x, y, t), B(x, y, t));
                }
            }
            t = t + 0.0002;
            window.requestAnimationFrame(run);
        };

        run();
    }, []);

    return (
        <canvas
            className="diagonal-split-background"
            ref={canvasRef}
            width="32"
            height="32"
        />
    );
};

export default Gradient;
