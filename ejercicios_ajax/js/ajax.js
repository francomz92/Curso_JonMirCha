export const ajax = async (conf) => {
   const { url, method, succes, error, data, headers, extra } = conf;

   let options = {
      method: method || 'GET',
      body: data,
   };
   if (headers) options['headers'] = headers;
   if (extra) options = { ...options, ...extra };
   try {
      const response = await fetch(url, options);

      if (!response.ok) throw response;
      if (succes) succes(response);
   } catch (err) {
      error ? error(err.statusText || 'Mensaje de error') : alert(err.statusText || 'Mensaje de error');
   }
};
