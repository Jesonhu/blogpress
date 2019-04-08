import bootstrap from './bootstrap';
import CONFIG from './config';

bootstrap()
  .then(res => {
    console.log(`Server Running: 127.0.0.1:${CONFIG.PORT}`);
  });



