import bootstrap from './bootstrap';

const PORT1 = 3000;
bootstrap()
  .then(res => {
    console.log(`Server Running: 127.0.0.1:${PORT1}`);
  });



