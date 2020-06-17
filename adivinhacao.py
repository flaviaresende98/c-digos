import random

print("=================================")
print("Bem vindo ao Jogo de Adivinhação!")
print("=================================")
numero_secreto = round(random.randrange(101))
total_tentativas = 0
pontos = 1000
print("Qual nível deseja?")
nivel = int(input("(1) Fácil, (2) Médio, (3) Difícil: "))

if (nivel == 1):
    total_tentativas = 20
elif(nivel == 2):
    total_tentativas = 10
else:
    total_tentativas = 5

for rodada in range(1, total_tentativas + 1):
    print("Tentativa: {} de {}".format(rodada,total_tentativas))
    chute_str = input("Digite seu número entre 0 e 100: ")
    chute = int(chute_str)
    print("Você digitou: ", chute)
    if(chute < 0 | chute > 100):
        print("Digite um número entre 0 e 100")
        continue
    if(numero_secreto == chute):
        print("Você Acertou!")
        print("Você fez {} pontos".format(pontos))
        break
    else:
        if(numero_secreto < chute):
            print("Você Errou!")
            print("Seu chute foi maior do que o número secreto")
        else:
            print("Você Errou!")
            print("Seu chute foi menor do que o número secreto")
        pontos_perdidos = abs(numero_secreto - chute)
        pontos = pontos - pontos_perdidos
    rodada = rodada + 1
print("Fim de Jogo")


