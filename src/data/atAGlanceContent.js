import { Anchor, BriefcaseBusiness, GraduationCap, Radar, Trophy, UsersRound } from "lucide-react";

export const glanceStats = [
  {
    id: "students",
    value: "400+",
    label: "Students Mentored",
    icon: GraduationCap,
    tone: "cyan",
    description: "Guided through practical web development and real project workflows.",
  },
  {
    id: "projects",
    value: "80+",
    label: "Projects Completed",
    icon: BriefcaseBusiness,
    tone: "blue",
    description: "Delivered scalable dashboards, business apps, and learning systems.",
  },
  {
    id: "experience",
    value: "4+",
    label: "Years Experience",
    icon: Anchor,
    tone: "teal",
    description: "Building, leading, debugging, deploying, and improving products.",
  },
  {
    id: "teamlead",
    value: "Team Lead",
    label: "Since 2022",
    icon: UsersRound,
    tone: "green",
    description: "Leading teams, reviewing code, mentoring developers, and shipping value.",
  },
];

export const missionSignals = [
  { label: "Current Depth", value: "-50m" },
  { label: "Zone", value: "Key Highlights" },
  { label: "Visibility", value: "Clear" },
  { label: "Signal", value: "Stable" },
];

export const glanceBadges = [
  { label: "Mentor", value: "400+ learners", icon: Trophy },
  { label: "Mission", value: "Build · Teach · Lead", icon: Radar },
];
