const BASE_URL = "https://deckofcardsapi.com";
const ROUTE = "/api/deck/new/draw/";
// http://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1
// http://deckofcardsapi.com/api/deck/new/draw/?count=3

const getEndpoint = () => {
  return `${BASE_URL}${ROUTE}`;
};

const draw = async (count: number) => {
  const endpoint = getEndpoint();

  const params = new URLSearchParams({
    count: count.toString(),
  });

  try {
    const response = await fetch(`${endpoint}?` + params.toString());

    const updatedResponse = {
      ...response,
      data: await response.json(),
    };

    return updatedResponse;
  } catch (error) {
    console.log(error);
  }
};

const requests = {
  draw,
};

export default requests;
