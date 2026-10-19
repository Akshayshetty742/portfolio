"use client";

import { useCallback } from "react";
import type { PointerEvent } from "react";
import { motion, useMotionValue, useReducedMotion, useSpring } from "framer-motion";

export function NeuralField() {
  const shouldReduceMotion = useReducedMotion();
  const pointerX = useSpring(useMotionValue(0), { stiffness: 85, damping: 22 });
  const pointerY = useSpring(useMotionValue(0), { stiffness: 85, damping: 22 });

  const handlePointerMove = useCallback(
    (event: PointerEvent<HTMLDivElement>) => {
      if (shouldReduceMotion || event.pointerType !== "mouse") return;

      const bounds = event.currentTarget.getBoundingClientRect();
      pointerX.set((event.clientX - bounds.left - bounds.width / 2) * 0.12);
      pointerY.set((event.clientY - bounds.top - bounds.height / 2) * 0.12);
    },
    [pointerX, pointerY, shouldReduceMotion],
  );

  const resetPointer = useCallback(() => {
    pointerX.set(0);
    pointerY.set(0);
  }, [pointerX, pointerY]);

  return (
    <div
      className="neural-field"
      onPointerMove={handlePointerMove}
      onPointerLeave={resetPointer}
      aria-hidden="true"
    >
      <svg className="neural-field__diagram" viewBox="0 0 640 640" fill="none">
        <circle className="neural-field__ring neural-field__ring--outer" cx="320" cy="320" r="270" />
        <circle className="neural-field__ring neural-field__ring--inner" cx="320" cy="320" r="194" />
        <path className="neural-field__wire" d="m116 236 112-106 145 37 133-55m-390 322 112-135 124 107 154-48M228 130l20 224m125-187-13 294m133-349-12 301M116 236l390 154M228 130l302 283M116 434l390-322M248 354l217-242" />
        <path className="neural-field__wire neural-field__wire--bright" d="m116 236 112-106 145 37m-125 187 124 107 154-48" />
        <circle className="neural-field__node" cx="116" cy="236" r="5" />
        <circle className="neural-field__node" cx="228" cy="130" r="5" />
        <circle className="neural-field__node neural-field__node--active" cx="373" cy="167" r="7" />
        <circle className="neural-field__node" cx="506" cy="112" r="4" />
        <circle className="neural-field__node" cx="248" cy="354" r="5" />
        <circle className="neural-field__node" cx="372" cy="461" r="5" />
        <circle className="neural-field__node" cx="526" cy="413" r="6" />
        <circle className="neural-field__node" cx="116" cy="434" r="4" />
      </svg>
      <motion.div
        className="neural-field__signal"
        style={{ x: pointerX, y: pointerY }}
      />
      <div className="neural-field__core">
        <span>AI</span>
        <i />
        <span>ML</span>
      </div>
      <span className="neural-field__readout neural-field__readout--top">MODEL / 001</span>
      <span className="neural-field__readout neural-field__readout--side">INPUT → OUTPUT</span>
      <span className="neural-field__readout neural-field__readout--bottom">SIGNAL FIELD ·  Bengaluru</span>
    </div>
  );
}
