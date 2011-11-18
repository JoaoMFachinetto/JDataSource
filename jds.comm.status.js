/*
Copyright 2011 João Marcelo Fachinetto


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
	É necessáerio criar a DIV SysStatus para mostrar o status da comunicação.
*/

function SysStatusError(StatusText) {
    $("#SysStatus").html(StatusText);
}

function SysStatusCommunicating() {
    $("#SysStatus").html("Buscando dados do Servidor...");
}

function SysStatusCommunicatingError() {        
    $("#SysStatus").html("Ocorreu um erro ao comunicar com o servidor");
}

function SysStatusCommunicatingComplete() {
    $("#SysStatus").html("Ok");
}

function SysStatusOk() {
    $("#SysStatus").html("Ok");
}