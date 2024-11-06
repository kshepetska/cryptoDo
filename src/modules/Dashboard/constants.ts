import tasksTwitterIcon from '../../assets/tasksTwitterIcon.svg';
import bgBlog1 from '../../assets/bgBlog1.jpg';
import bgBlog2 from '../../assets/bgBlog2.jpg';
import bgCompanyImage from '../../assets/bgNewCompany.png';

export const tasksData = [
  {
    id: 0,
    socialIcon: tasksTwitterIcon,
    completed: false,
    taskName: 'Follow us on X (Twitter)',
    taskDescription:
      'here you can write a more detailed condition for completing the task or not write at all. here you can write a more detailed condition for completing the task or not write at all.',
    campaign: true,
  },
  {
    id: 1,
    socialIcon: tasksTwitterIcon,
    completed: false,
    taskName: 'Follow us on X (Twitter)',
    taskDescription:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    campaign: true,
  },
  {
    id: 2,
    socialIcon: tasksTwitterIcon,
    completed: true,
    taskName: 'Follow us on X (Twitter)',
    taskDescription:
      'here you can write a more detailed condition for completing the task or not write at all. here you can write a more detailed condition for completing the task or not write at all.',
    campaign: false,
  },
];

export const blogData = [
  {
    id: 0,
    data: 'Sep20, 20232 min read',
    title: 'Get Ready for Krapopolis, Dan Harmon’s NFT-Powered Show',
    bgBlog: bgBlog1,
    projectId: 1,
  },
  {
    id: 1,
    data: 'Sep20, 20232 min read',
    title: 'Get Ready for Krapopolis, Dan Harmon’s NFT-Powered Show',
    bgBlog: bgBlog2,
    projectId: 1,
  },
  {
    id: 2,
    data: 'Sep20, 20232 min read',
    title: 'Get Ready for Krapopolis, Dan Harmon’s NFT-Powered Show',
    bgBlog: bgCompanyImage,
    projectId: 1,
  },
];
