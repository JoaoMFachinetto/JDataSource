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