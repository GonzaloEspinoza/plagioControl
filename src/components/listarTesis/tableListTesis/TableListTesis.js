import React, {useEffect, useState} from "react";

import './tableListTesis.scss';

export const TableListTble=({listTesis=[]})=>{

    // console.log(JSON.stringify(listTesis));

    const [pagination, setPagination] = useState(0);
    const [listT, setListT] = useState([])

    useEffect(()=>{
       
        setListT(listTesis)
    },[listT])


    const handlePagination=(page=0)=>{
    
        
    }

    return(
        <div className="content-table">
            <table className="table-list-tesis">
                <thead>
                <tr>
                    <th className="title-table">Detalle</th>
                    <th className="title-table">Autor</th>
                    <th className="title-table">Editar</th>
                    <th className="title-table">Descargar</th>
                </tr>
                </thead>
                <tbody>
                {
                    listT.map((d,i)=>{
                        return <tr>
                            <td>
                                <div className="detalle">
                                    <div className="avatar">
                                        <img height="30px" width="30px"  src={d.urlImageAvatar} />
                                    </div>
                                    <div className="data-autor">
                                        <div className="title">
                                            {d.title}
                                        </div>
                                        <div className="date-publicacion">
                                            {d.fechaPublicacion}
                                        </div>
                                    </div>
                                </div>
                            </td>
                            <td>
                                <div className="date-autor">
                                    <div className="neme-autor">{d.autor}</div>
                                    <div className="neme-fechaAutor">{d.fechaAuto}</div>

                                </div>
                            </td>
                            <td>
                                <div className="edit-data">
                                    <div className="edita-icon">
                                        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                            <path stroke-linecap="round" stroke-linejoin="round" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                                        </svg>
                                    </div>
                                    <div className="edita-fecha">{d.ultimaEdicion}</div>
                                </div>
                            </td>
                            <td>
                                <div className="data-descarga">
                                    <div className={d.descargas}>
                                        {d.descargas}
                                    </div>
                                </div>
                            </td>
                            <td>
                                <div className="icon-option">
                                    <div className="option">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
                                        </svg>
                                    </div>
                                </div>
                            </td>

                        </tr>
                    })
                }   
                </tbody>
                
            </table>
            
            {/* pagination */}
            <div className="content-pagination">
                
                <div className="pagination-1">
                        Row per page: 8
                </div>
                <div className="pagination-2">
                    1-8 of 1240
                </div>
                <div className="conten-icons">
                    <svg onClick={()=>handlePagination(0)} xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M15 19l-7-7 7-7" />
                    </svg>
                    <svg onClick={()=>handlePagination(1)}  xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7" />
                    </svg>
                </div>
            </div>

        </div>
    );
}

TableListTble.prototype={
    listTesis:Array
}