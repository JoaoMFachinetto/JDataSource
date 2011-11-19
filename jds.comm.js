/*
Copyright 2011 Jo�o Marcelo Fachinetto
Copyright 2011 Danimar Ribeiro
Copyright 2011 Willian Bonho Daiprai


Este arquivo � parte do programa JDataSource


JDataSource � um software livre; voc� pode redistribui-lo e/ou 
modifica-lo dentro dos termos da Licen�a P�blica Geral GNU como 
publicada pela Funda��o do Software Livre (FSF); na vers�o 2 da 
Licen�a, ou (na sua opni�o) qualquer vers�o.

Este programa � distribuido na esperan�a que possa ser  util, 
mas SEM NENHUMA GARANTIA; sem uma garantia implicita de ADEQUA��O a qualquer
MERCADO ou APLICA��O EM PARTICULAR. Veja a
Licen�a P�blica Geral GNU para maiores detalhes.
Voc� deve ter recebido uma c�pia da Licen�a P�blica Geral GNU
junto com este programa, se n�o, escreva para a Funda��o do Software

Livre(FSF) Inc., 51 Franklin St, Fifth Floor, Boston, MA  02110-1301  USA

*/

/* 
OBSERVACAO IMPORTANTE:
Existe um padr�o de pacote de retorno que trafega do servidor para esta camada,
portanto para implementacao do mesmo deve-se seguir este padrao de pacote que deve ser implementado no servidor.
Para informa��es do pacote padr�o ler o arquivo README.txt
*/



/* ESTE METODO E UTILIZADO PARA ENVIAR E RECEBER DADOS DO SERVIDOR UTILIZANDO O METODO POST */
function AsyncPostData(DataSourceAddr, RequestData, onServerResponse) {
    SysStatusCommunicating();
    $.ajax({
        type: "POST",
        url: DataSourceAddr,
        dataType: 'json',
        cache: false,
        data: RequestData,
        success: function (Response) {
            if (typeof (onServerResponse) == 'function') {
                SysStatusOk();
                if (Response.ServerOK) {
                    onServerResponse(Response.ServerData);
                }
                else {
                    if (Response.ErrorCode == 1021) {
                        //Erro de Sess�o Expirada no Servidor                        
                    }
                    if (Response.ErrorCode == 1010) {
                        //Erros gen�ricos que devem ser tratados no servidor e retornado a mensagem para a p�gina                        
                        SysStatusError("Server Error: " + Response.ErrorCode + " @ " + ServerAddr + ". <b><font face='arial' size=2 style='background-color: #FFFF00'>Error: " + Response.ServerError + "</font></b>");                        
                    }
                }
            }
        },
        beforeSend: function () {
            SysStatusCommunicating();
        },
        ajaxError: function () {
            SysStatusCommunicatingError();
        },
        error: function () {
            SysStatusCommunicatingError();
        },
        ajaxComplete: function () {
            SysStatusCommunicatingComplete();
        }
    });
}

/* ESTE METODO E UTILIZADO PARA RECEBER DADOS DO SERVIDOR UTILIZANDO O METODO GET */
function AsyncGetData(DataSourceAddr, onServerResponse) {
    SysStatusCommunicating();
    $.ajax({
        type: "GET",
        url: DataSourceAddr,
        dataType: 'json',
        cache: false,        
        success: function (Response) {
            if (typeof (onServerResponse) == 'function') {
                SysStatusOk();
                if (Response.ServerOK) {
                    onServerResponse(Response.ServerData);
                }
                else {
                    if (Response.ErrorCode == 1021) {
                        //Erro de Sess�o Expirada no Servidor                        
                    }
                    if (Response.ErrorCode == 1010) {
                        //Erros gen�ricos que devem ser tratados no servidor e retornado a mensagem para a p�gina                        
                        SysStatusError("Server Error: " + Response.ErrorCode + " @ " + ServerAddr + ". <b><font face='arial' size=2 style='background-color: #FFFF00'>Error: " + Response.ServerError + "</font></b>");
                    }
                }
            }
        },
        beforeSend: function () {
            SysStatusCommunicating();
        },
        ajaxError: function () {
            SysStatusCommunicatingError();
        },
        error: function () {
            SysStatusCommunicatingError();
        },
        ajaxComplete: function () {
            SysStatusCommunicatingComplete();
        }
    });
}

/* ESTE METODO E UTILIZADO PARA ENVIAR E RECEBER DADOS DO SERVIDOR UTILIZANDO O METODO POST COM CACHE HABILITADO */
function AsyncGetCachedData(DataSourceAddr, RequestData, onServerResponse) {
    SysStatusCommunicating();
    $.ajax({
        type: "GET",
        url: DataSourceAddr,
        dataType: 'json',
        cache: true,
        data: RequestData,
        success: function (Response) {
            if (typeof (onServerResponse) == 'function') {
                SysStatusOk();
                if (Response.ServerOK) {
                    onServerResponse(Response.ServerData);
                }
                else {
                    if (Response.ErrorCode == 1021) {
                        //Erro de Sess�o Expirada no Servidor                        
                    }
                    if (Response.ErrorCode == 1010) {
                        //Erros gen�ricos que devem ser tratados no servidor e retornado a mensagem para a p�gina                        
                        SysStatusError("Server Error: " + Response.ErrorCode + " @ " + ServerAddr + ". <b><font face='arial' size=2 style='background-color: #FFFF00'>Error: " + Response.ServerError + "</font></b>");
                    }
                }
            }
        },
        beforeSend: function () {
            SysStatusCommunicating();
        },
        ajaxError: function () {
            SysStatusCommunicatingError();
        },
        error: function () {
            SysStatusCommunicatingError();
        },
        ajaxComplete: function () {
            SysStatusCommunicatingComplete();
        }
    });
}