import React, { useEffect, useState } from "react";
import logo from "../src/assets/asset1.png";
const GoogleDriveFolder = ({ folderId, apiKey }) => {
  const [files, setFiles] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchFiles = async () => {
      setLoading(true);
      try {
        const response = await fetch(
          `https://www.googleapis.com/drive/v3/files?q='${folderId}'+in+parents&key=${apiKey}&fields=files(id,name,mimeType,thumbnailLink,iconLink)`
          
        );
        const data = await response.json();

        if (data.files) {
          setFiles(data.files);
        } else {
          console.error("Erro: Nenhum arquivo encontrado", data);
        }
      } catch (error) {
        console.error("Erro ao buscar arquivos da pasta:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchFiles();
  }, [folderId, apiKey]);

  if (loading) {
    return <p>Carregando arquivos...</p>;
  }


  

  return (
    <div className="pt-5 pb-10 min-h-screen font-[Nunito] bg-[#111111] flex flex-col gap-1 items-center justify-center ">
      <img src={logo} alt="Logo"  className="lg:w-16 mt-10 w-22"/>
      <h1 className="font-bold mb-20 text-4xl text-[#9a9a9a] font-[Nunito]">Ideias de projeto</h1>
      {files.length === 0 ? (
        <p>Nenhum arquivo encontrado na pasta.</p>
      ) : (
        <ul className=" grid gap-2 grid-cols-2 lg:grid-cols-4 lg:ml-10">
          {files.map((file) => (
            <li key={file.id} className="w-34 h-34 border border-[#9a9a9a]  lg:w-48 lg:h-48  
            rounded-md flex  justify-center lg:p-4 p-1 hover:border-[#10b981] 
            hover:text-[#9a9a9a] transition duration-400 ">
              <a
                href={`https://drive.google.com/file/d/${file.id}/view`}
                className="flex flex-col items-center justify-around"
                target="_blank"
                rel="noopener noreferrer"
              >
                {file.mimeType.startsWith("image/") && file.thumbnailLink ? (
                  <img
                    src={file.thumbnailLink}
                    alt={file.name}
                    style={{ width: "100px", marginRight: "10px" }}
                  />
                ) : (
                  <img
                    src={file.iconLink}
                    alt="Ícone do arquivo"
                    style={{ width: "30px", marginRight: "10px" }}
                  />
                )}
                <p className="font-medium text-white text-center text-[14px]">{file.name}</p>
              </a>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default GoogleDriveFolder;