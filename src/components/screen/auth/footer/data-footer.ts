interface IChapter {
  title: string;
  path: string;
}
interface IFooter {
  section: string;
  chapters: IChapter[];
}
export const dataFooter: IFooter[] = [
  {
    section: "Company",
    chapters: [
      { title: "About", path: "/about" },
      { title: "Careers", path: "/careers" },
      { title: "Press", path: "/path" },
      { title: "Blog", path: "/blog" },
      { title: "Affilates", path: "/affilates" },
    ],
  },
  {
    section: "Community",
    chapters: [
      { title: "Go Premium", path: "/community/go-premium" },
      { title: "Team Plans", path: "/community/team-plans" },
      { title: "Refer a Friend", path: "/community/refer-a-friend" },
      { title: "Gift Cards", path: "/community/gift-card" },
      { title: "Scholarships", path: "/community/scolarships" },
      { title: "Free Classes", path: "/community/free-classes" },
    ],
  },
  {
    section: "Teaching",
    chapters: [
      { title: "Become a Teacher", path: "/teaching/become-a-teacher" },
      { title: "Teaching Academy", path: "/teaching/teaching-academy" },
      { title: "Teacher Handbook", path: "/teaching/teacher-handbook" },
      { title: "Partnerships", path: "/teaching/partnerships" },
    ],
  },
  {
    section: "Support",
    chapters: [
      { title: "Support", path: "/support" },
      { title: "Contact Us", path: "/contacts" },
      { title: "System Requirements", path: "/support/system-requirements" },
      {
        title: "Register Activation Key",
        path: "/support/register-activation-key",
      },
      { title: "Site feedback", path: "/feedback" },
    ],
  },
];
