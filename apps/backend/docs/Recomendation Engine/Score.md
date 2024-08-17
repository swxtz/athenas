
# Pontuação base

Toda pontuação base começa com 500 por padrão, já definido no banco de dados.
podendo variar de 0 - 1000 de pontuação usando valores com virgula ( float ).

# Pontuação variável

Na tabela de recomendação tem alguns dados variáveis para manutenção e auto regulação
para manter tal produto relevante no algoritmo de recomendação

---
- Views
- Likes
- Vendas
---

## Tabela de pontuação variável
#beta

A tabela de pontos reseta para o valor base de 500 todo mês para manter um equilíbrio das recomendações

## Valores positivos
| Ação                         | Pontos |
| ---------------------------- | ------ |
| *Visualização*               | *0.03* |
| *Compra*                     | *0.50* |
| *Recompra*                   | *0.60* |
| *Curtida*                    | *0.30* |
| *Pesquisa por conta própria* | *0.75* |

## Valores negativos
| Ação                         | Pontos |
| ---------------------------- | ------ |
| *Visualização*               | *0.03* |
| *Compra*                     | *0.50* |
| *Recompra*                   | *0.60* |
| *Curtida*                    | *0.30* |
| *Pesquisa por conta própria* | *0.75* |

---


