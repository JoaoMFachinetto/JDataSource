/*
Copyright 2011 João Marcelo Fachinetto
Copyright 2011 Danimar Ribeiro
Copyright 2011 Willian Bonho Daiprai


Este arquivo é parte do programa JDataSource


JDataSource é um software livre; você pode redistribui-lo e/ou 
modifica-lo dentro dos termos da Licença Pública Geral GNU como 
publicada pela Fundação do Software Livre (FSF); na versão 2 da 
Licença, ou (na sua opnião) qualquer versão.

Este programa é distribuido na esperança que possa ser  util, 
mas SEM NENHUMA GARANTIA; sem uma garantia implicita de ADEQUAÇÂO a qualquer
MERCADO ou APLICAÇÃO EM PARTICULAR. Veja a
Licença Pública Geral GNU para maiores detalhes.
Você deve ter recebido uma cópia da Licença Pública Geral GNU
junto com este programa, se não, escreva para a Fundação do Software

Livre(FSF) Inc., 51 Franklin St, Fifth Floor, Boston, MA  02110-1301  USA

*/

/* 
OBSERVACAO IMPORTANTE:
Existe um padrão de pacote de retorno que trafega do servidor para esta camada,
portanto para implementacao do mesmo deve-se seguir este padrao de pacote que deve ser implementado no servidor.
Para informações do pacote padrão ler o arquivo README.txt
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
                        //Erro de Sessão Expirada no Servidor                        
                    }
                    if (Response.ErrorCode == 1010) {
                        //Erros genéricos que devem ser tratados no servidor e retornado a mensagem para a página                        
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
                        //Erro de Sessão Expirada no Servidor                        
                    }
                    if (Response.ErrorCode == 1010) {
                        //Erros genéricos que devem ser tratados no servidor e retornado a mensagem para a página                        
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
                        //Erro de Sessão Expirada no Servidor                        
                    }
                    if (Response.ErrorCode == 1010) {
                        //Erros genéricos que devem ser tratados no servidor e retornado a mensagem para a página                        
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