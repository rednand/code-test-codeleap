import { formatDistanceToNow } from "date-fns";

export const handleTime = (date) => {
  return formatDistanceToNow(new Date(date), { addSuffix: true });
};
