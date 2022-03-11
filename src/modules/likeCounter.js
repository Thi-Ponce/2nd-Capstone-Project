export const getLikes = async () => {
  const likesData = await fetch('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/8d5UQy3q00JntMkUFlri/likes');
  const allLikes = await likesData.json();
  return allLikes;
};

const updateLikes = async (id) => {
  const store = await getLikes();
  let results = 0;
  store.forEach((e) => {
    if (e.item_id.toString() === id.toString()) {
      results = e.likes;
    }
  });
  return results;
};

export const countLikes = async (id, containerDiv) => {
  const likes = await updateLikes(id);
  containerDiv.innerHTML = `${likes}`;
};
