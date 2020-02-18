const initState = {
  projects: [
    {id: '1', title: 'Motivational Barriers', content: 'blah blah blah'},
    {id: '2', title: 'Growth vs Fixed', content: 'blah blah blah'},
    {id: '3', title: 'Different Modalities', content: 'blah blah blah'}
  ]
}

const projectReducer = (state = initState, action) => {
  return state;
};

export default projectReducer;