import {
  SiPython,
  SiOpenjdk,
  SiTypescript,
  SiJavascript,
  SiHtml5,
  SiNextdotjs,
  SiReact,
  SiNodedotjs,
  SiExpress,
  SiFastapi,
  SiPostgresql,
  SiMysql,
  SiSqlite,
  SiPrisma,
  SiOpencv,
  SiGithub,
  SiJsonwebtokens,
  SiPostman,
} from "react-icons/si";
import { Code2, Database } from "lucide-react";

const iconMap = {
  python: { icon: SiPython, color: "#3776AB" },
  java: { icon: SiOpenjdk, color: "#437291" },
  typescript: { icon: SiTypescript, color: "#3178C6" },
  javascript: { icon: SiJavascript, color: "#F7DF1E" },
  html: { icon: SiHtml5, color: "#E34F26" },
  nextjs: { icon: SiNextdotjs, color: "#FFFFFF" },
  react: { icon: SiReact, color: "#61DAFB" },
  nodejs: { icon: SiNodedotjs, color: "#5FA04E" },
  express: { icon: SiExpress, color: "#FFFFFF" },
  fastapi: { icon: SiFastapi, color: "#009688" },
  postgresql: { icon: SiPostgresql, color: "#4169E1" },
  mysql: { icon: SiMysql, color: "#4479A1" },
  sqlite: { icon: SiSqlite, color: "#003B57" },
  oracle: { icon: Database, color: "#F80000" },
  prisma: { icon: SiPrisma, color: "#FFFFFF" },
  opencv: { icon: SiOpencv, color: "#5C3EE8" },
  github: { icon: SiGithub, color: "#FFFFFF" },
  jwt: { icon: SiJsonwebtokens, color: "#FB015B" },
  vscode: { icon: Code2, color: "#007ACC" },
  postman: { icon: SiPostman, color: "#FF6C37" },
};

export default function SkillIcon({ icon, size = 24 }) {
  const entry = iconMap[icon];
  if (!entry) return null;
  const { icon: Icon, color } = entry;
  return <Icon size={size} color={color} />;
}