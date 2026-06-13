import { useEffect, useMemo, useRef, useState } from "react";
import { useInView } from "framer-motion";

const parseValue = (value) => {
  const match = String(value).match(/^(\D*)(\d+(?:\.\d+)?)(.*)$/);

  if (!match) {
    return { prefix: "", end: 0, suffix: String(value), decimals: 0 };
  }

  const [, prefix, number, suffix] = match;
  const decimals = number.includes(".") ? number.split(".")[1].length : 0;

  return {
    prefix,
    end: Number(number),
    suffix,
    decimals,
  };
};

const CountUp = ({ value, className = "", duration = 1200 }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const { prefix, end, suffix, decimals } = useMemo(() => parseValue(value), [value]);
  const shouldAnimate = end > 10;
  const [current, setCurrent] = useState(() => (shouldAnimate ? 0 : end));

  useEffect(() => {
    if (!shouldAnimate) {
      setCurrent(end);
      return undefined;
    }

    if (!isInView) return undefined;

    let frameId;
    const startedAt = performance.now();

    const animate = (now) => {
      const progress = Math.min((now - startedAt) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);

      setCurrent(end * eased);

      if (progress < 1) {
        frameId = requestAnimationFrame(animate);
      }
    };

    frameId = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(frameId);
  }, [duration, end, isInView, shouldAnimate]);

  return (
    <span ref={ref} className={className}>
      {prefix}
      {current.toFixed(decimals)}
      {suffix}
    </span>
  );
};

export default CountUp;
