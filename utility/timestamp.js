export default function TimeStampToDate(stamp){
const t = new Date(stamp);
return t.toLocaleString();
}