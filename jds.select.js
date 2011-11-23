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


function DataBindSelect(Select, onSelected) {
    var DataTextField = $(Select.selector).attr('datatextfield');
    var DataValueField = $(Select.selector).attr('datavaluefield');
    var DataSource = $(Select.selector).attr('datasourceid');


    if (typeof (onSelected) === 'function') {
        $(Select.selector).die('change');
        $(Select.selector).live('change', function () {
            onSelected($(Select.selector));
        });        
    }    

    var data = { Textfield: DataTextField, ValueField: DataValueField };    
    AsyncPostData(DataSource, data, function (data) {
        Select[0].options.length = 0;

        Select[0].options[Select[0].options.length] = new Option('Select', 0, true, true);
        for (var i = 0; i <= data.Data.length - 1; i++) {
            Select[0].options[Select[0].options.length] = new Option(data.Data[i][DataTextField], data.Data[i][DataValueField], false, false);
        }
    });

}