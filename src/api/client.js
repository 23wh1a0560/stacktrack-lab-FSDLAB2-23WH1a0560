// TODO: Set the base URL for your API


export const getTasks = async () => {
  // Dummy data (since backend is not available)
  return [
    {
      _id: "1",
      title: "Complete Assignment",
      description: "React lab work",
      status: "pending"
    },
    {
      _id: "2",
      title: "Study React",
      description: "Hooks and routing",
      status: "completed"
    }
  ];
};