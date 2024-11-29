interface Friend {
  avatar: string; // 头像链接
  name: string; // 用户 id
  link: string; // 博客链接
  title?: string; // 用户头衔
  tag?: string; // 用户标签
  color?: string; // 标签颜色
}

/**
 * TODO: 缺项处理
 * 在此处填写你的友情链接
 */
export const friendsInfo: Friend[] = [
    {
    avatar: "https://avatars.githubusercontent.com/u/163713803?v=4",
    name: "LofiSu ",
    title: "Blog模板作者 🪁",
    link: "https://www.lofisu.chat/",
    tag: "电子科技大学👨‍🎓",
    color: "indigo",
  },
];
