export const ITEMS_PER_PAGE = 10;
export const getPaginationParams = (
  {
    page,
    limit = ITEMS_PER_PAGE,
  }: {
    page: number;
    limit?: number;
  } = { page: 1, limit: ITEMS_PER_PAGE },
) => {
  const skip = page * ITEMS_PER_PAGE;
  return {
    pagination: {
      skip,
      limit,
    },
  };
};
