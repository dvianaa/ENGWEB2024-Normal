# ENGWEB2024-Normal

## Exercicio 1

1.1

O dataset foi convertido para um csv utilizando a ferramenta csv2json;

Foi substituida a key 'idcontrato' por '_id' e todos os espaços da key foram substituidos por '';

O dataset foi importado para o MongoDB usando o comando: mongoimport -d contratos -c contratos --type json --file 'contratos.json' --jsonArray

1.2

1. db.contratos.countDocuments();
2. db.contratos.countDocuments({ "tipoprocedimento": "Ajuste Direto Regime Geral" });
3. db.contratos.distinct("entidade_comunicante").sort();
4. db.contratos.aggregate([ { $group: { _id: "$tipoprocedimento", total: { $sum: 1 } } } ]);
5. db.contratos.aggregate([ { $group: { _id: "$entidade_comunicante", total: { $sum: "$precoContratual" } } } ]);

Para executar basta correr: "npm run start" dentro da diretoria do exercicio em questão

Por algum motivo que não consegui entender, no exercício 2 a minha rota '/' não dá get dos contratos, apesar de aparentemente estar tudo corretamente implementado.
O exercício 3 não foi feito.


