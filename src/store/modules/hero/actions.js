export function searchHero(name) {
  return {
    type: '@hero/SEARCH_HERO',
    payload: {
      name,
    },
  };
}
export function searchHeroError(message) {
  return {
    type: '@hero/SEARCH_HERO_ERROR',
    payload: {
      message,
    },
  };
}

export function searchHeroById(id) {
  return {
    type: '@hero/SEARCH_HERO_ID',
    payload: {
      id,
    },
  };
}
