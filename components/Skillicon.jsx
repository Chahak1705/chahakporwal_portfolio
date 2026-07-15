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
  SiOracle,
  SiPrisma,
  SiOpencv,
  SiGithub,
  SiJsonwebtokens,
  SiPostman,
  SiVisualstudiocode,
} from "react-icons/si";

const iconMap = {
  python: SiPython,
  java: SiOpenjdk,
  typescript: SiTypescript,
  javascript: SiJavascript,
  html: SiHtml5,
  nextjs: SiNextdotjs,
  react: SiReact,
  nodejs: SiNodedotjs,
  express: SiExpress,
  fastapi: SiFastapi,
  postgresql: SiPostgresql,
  mysql: SiMysql,
  sqlite: SiSqlite,
  oracle: SiOracle,
  prisma: SiPrisma,
  opencv: SiOpencv,
  github: SiGithub,
  jwt: SiJsonwebtokens,
  postman: SiPostman,
  vscode: SiVisualstudiocode,
};

export default function SkillIcon({ icon, size = 24 }) {
  const Icon = iconMap[icon];
  if (!Icon) return null;
  return <Icon size={size} />;
}