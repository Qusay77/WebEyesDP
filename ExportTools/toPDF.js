import html2pdf from 'html2pdf.js';
import store from '../src/redux/configureStore';
import { setPDF } from '../src/redux/counterSlice';
var opt = {
  margin: 1,
  filename: 'DP.pdf',
  image: { type: 'PNG', quality: 1 },
  html2canvas: { scale: 2 },
  jsPDF: {
    unit: 'mm',
    format: 'a3',
    orientation: 'portrait',
  },
};
const exportToPDF = (dom) => {
  html2pdf()
    .from(dom)
    .set(opt)
    .save()
    .then(() => store.dispatch(setPDF({ value: 0 })));
};

export { exportToPDF };
