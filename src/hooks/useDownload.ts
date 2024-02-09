const useDownload = () => {
  const downloadBlob = async (url: string) => {
    const xhr = new XMLHttpRequest();
    xhr.responseType = "blob";
    xhr.onload = (event) => {
      const blob = xhr.response;
    };
    xhr.open("GET", url);
    xhr.send();
  };

  return { downloadBlob };
};

export default useDownload;
