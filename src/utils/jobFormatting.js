const bulletPattern = /^[-*•]\s+(.+)/;
const numberedPattern = /^\d+[.)]\s+(.+)/;
const markdownHeadingPattern = /^(#{1,3})\s+(.+)/;

const isColonHeading = (line) =>
  line.endsWith(":") && line.length <= 90 && line.split(/\s+/).length <= 8;

const isUppercaseHeading = (line) =>
  line.length <= 70 &&
  /[A-Z]/.test(line) &&
  line === line.toUpperCase() &&
  line.replace(/[^A-Z]/g, "").length >= 3;

export const parseJobDetails = (focus = "") => {
  const blocks = [];
  let activeList = null;

  const closeList = () => {
    activeList = null;
  };

  String(focus || "")
    .split(/\r?\n/)
    .map((line) => line.trim())
    .filter(Boolean)
    .forEach((line) => {
      const markdownHeading = line.match(markdownHeadingPattern);
      const bullet = line.match(bulletPattern) || line.match(numberedPattern);

      if (markdownHeading) {
        closeList();
        blocks.push({
          type: "heading",
          level: Math.min(markdownHeading[1].length, 3),
          text: markdownHeading[2].trim().replace(/:$/, ""),
        });
        return;
      }

      if (bullet) {
        if (!activeList) {
          activeList = { type: "list", items: [] };
          blocks.push(activeList);
        }

        activeList.items.push(bullet[1].trim());
        return;
      }

      closeList();

      if (isColonHeading(line) || isUppercaseHeading(line)) {
        blocks.push({
          type: "heading",
          level: 2,
          text: line.replace(/:$/, ""),
        });
        return;
      }

      blocks.push({
        type: "paragraph",
        text: line,
      });
    });

  return blocks;
};

export const getJobSummary = (focus = "") => {
  const blocks = parseJobDetails(focus);
  const summaryBlock =
    blocks.find((block) => block.type === "paragraph") ||
    blocks.find((block) => block.type === "list" && block.items.length) ||
    blocks.find((block) => block.type === "heading");

  if (!summaryBlock) {
    return "";
  }

  if (summaryBlock.type === "list") {
    return summaryBlock.items[0] || "";
  }

  return summaryBlock.text || "";
};
