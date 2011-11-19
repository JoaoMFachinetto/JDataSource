/*
Copyright 2011 Jo�o Marcelo Fachinetto


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
	� necess�erio criar um Span com Id SysStatus para mostrar o status da comunica��o.
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