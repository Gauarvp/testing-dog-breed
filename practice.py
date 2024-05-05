# import numpy as np
# import matplotlib.pyplot as plt


# m1 = 10
# m2 = 20
# k1 = 1000
# k2 = 1000
# k3 = 1000


# K = np.array([[k1+k2 , -k2],
#               [-k2,k2+k3]])

# M = np.array([[m1,0],
#               [0,m2]])

# eigenValue, eigenVector = np.linalg.eig(np.linalg.inv(M) @ K)

# wnn = np.sqrt(eigenValue)
# wn = np.sort(wnn)
# wn1 = wn[0]
# wn2 = wn[1]

# print("wn1" ,wn1)
# print("wn2" ,wn2)

# n = 150
# alpha11 = np.zeros(n)
# alpha22 = np.zeros(n)
# alpha12 = np.zeros(n)
# alpha21 = np.zeros(n)

# w = np.linspace(0,1.5*wn2,n)

# i = 0
# for W in w:
#     alpha = np.linalg.inv(K - M*W**2)
#     alpha11[i] = np.abs(alpha[0,0])
#     alpha22[i] = np.abs(alpha[1,1])
#     alpha12[i] = np.abs(alpha[0,1])
#     alpha21[i] = np.abs(alpha[1,0])
#     i+=1

# plt.semilogy(w,alpha11,label="alpha11")
# plt.semilogy(w,alpha22,label="alpha22")
# plt.semilogy(w,alpha12,label="alpha12")
# plt.semilogy(w,alpha21,label="alpha21")
# plt.xlabel("w in rad/s")
# plt.ylabel("alpha")
# plt.title("Frequency Response Funtion")
# plt.legend()
# plt.grid()
# plt.show()



# import numpy as np
# import matplotlib.pyplot as plt 

# L = 600e-3
# b = 30e-3
# t = 10e-3
# E = 210e9
# rho = 7860

# Noe = 100
# le = L/Noe
# Nod = Noe + 1
# dof = 2
# Tdof = Nod*dof
 
# A = b*t
# I = (b*t**3) /12

# Ke = np.array([[12,6*le,-12,6*le],
#                [6*le,4*le**2,-6*le,2*le**2],
#                [-12,-6*le,12,-6*le],
#                [6*le,2*le**2,-6*le,4*le**2]])


# Me = np.array([[156,22*le,54,-13*le],
#                [22*le,4*le**2,13*le,-3*le**2],
#                [54,-13*le,156,-22*le],
#                [-13*le,-3*le**2,-22*le,4*le**2]])

# K1 = np.zeros((Tdof,Tdof))
# M1 = np.zeros((Tdof,Tdof))

# for i in range(Noe):
#     pt = 2*i
#     po = pt
#     p4 = pt+4
#     K1[po:p4,po:p4] = K1[po:p4,po:p4] + Ke
#     M1[po:p4,po:p4] = M1[po:p4,po:p4] + Me


# KG = ((E*I)/le**3)*K1
# MG = ((rho*A*le)/420)*M1

# KG = KG[2:,:]
# KG = KG[:,2:]
# MG = MG[2:,:]
# MG = MG[:,2:]

# Lam, P = np.linalg.eig(np.linalg.inv(MG).dot(KG))

# wn = np.sqrt(Lam)
# wh = np.sort(abs(Lam))
# wh6 = wh[:6]
# print("wh6",wh6)

# idx = Lam.argsort()
# Lam = Lam[idx]
# P = P[:,idx]

# P /= np.max(np.abs(P),axis=0)

# plt.figure()

# for i in range(3):
#     mode = np.zeros(Nod)
#     mode[1:] = P[::2,i]
#     plt.plot(np.linspace(0,L,Nod),mode, label=f"Mode {i+1}")

# plt.grid()
# plt.show()


# import numpy as np
# import matplotlib.pyplot as plt


# F0 = 0
# t0 = np.pi
# M = 1
# C = 0.2
# K = 1
# x0 = 0
# x0d = 0.2

# wn = np.sqrt(K/M)
# print("wn",wn)

# T = 2*np.pi/(wn)
# dt = T/40

# t = np.arange(0,5*np.pi+dt,dt)

# F = F0*(1- np.sin((np.pi*t)/2*t0))

# N = len(F)

# y = np.zeros(N)

# a0 = (F[0] - C*x0d -K*x0)/M
# y0 = x0 - dt*x0d + dt**2/2*(a0)
# y[0] = x0

# A = (M / dt**2) + (C/(2*dt))
# B = ((2*M/(dt**2) -K)*y[0] + (C/(2*dt) - M/(dt**2))*y0 + F[0])
# y[1] = B/A

# for i in range(1,N-1):
#     A = (M / dt**2) + (C/(2*dt))
#     B = ((2*M/(dt**2) -K)*y[i] + (C/(2*dt) - M/(dt**2))*y[i-1] + F[i])
#     y[i+1] = B/A

# plt.plot(t,y)
# plt.grid()
# plt.show()

# import numpy as np
# import matplotlib.pyplot as plt
# from scipy.integrate import odeint

# M = 1
# C = 0.2
# K = 1
# F0 = 1
# t0 = np.pi
# t = 0

# def Ft(y,t):
#     return [y[1],(1/M) * (F0*(1-np.sin(np.pi*t/(2*t0))) -C*y[1] -K*y[0])]

# t_range = np.linspace(0,4*np.pi,500)
# y_result = odeint(Ft,[0,0],t_range)

# plt.plot(t_range,y_result[:,1],label="odeint-solution")
# plt.grid()
# plt.show()


# import numpy as np
# import matplotlib.pyplot as plt
# from sympy import * 
# import sympy as sym


# w1 = sym.symbols("w1")

# m1 = 5
# m3 = 5
# m2 = 10
# b = 20e-3
# t = 5e-3
# L = 100e-3
# E = 210e9

# I = b*t**3/(12)

# a11 = a33 = (3/256)*(L**3/(E*I))
# a22 = (1/48)*(L**3/(E*I))

# expr = a11*m1 + a22*m2 + a33*m3
# solution = sym.solve(-(1/w1**2) + expr,w1)
# print(solution)


# import numpy as np
# import matplotlib.pyplot as plt 

# m1 = 100
# m2 = 50
# m3 = 200
# k1 = 2000
# k2 = 1800
# k3 = 1500

# M = np.array([[m1,0,0],
#               [0,m2,0],
#               [0,0,m3]])

# K = np.array([[k1+k2,-k2,0],
#               [-k2,k2+k3,-k3],
#               [0,-k3,k3]])

# eigenValue,eigenVector = np.linalg.eig(np.linalg.inv(M) @ K)

# wnn = np.sqrt(eigenValue)
# wn = np.sort(wnn)

# print("wn1",wn[0])
# print("wn2",wn[1])
# print("wn3",wn[2])

# MS = np.zeros((5,3))
# MS[1:4,:] = eigenVector

# plt.plot(MS[:,0],label="mode1")
# plt.plot(MS[:,1],label="mode2")
# plt.plot(MS[:,2],label="mode3")
# plt.xlabel("node")
# plt.ylabel("displacement")
# plt.title("Mode shapes")
# plt.legend()
# plt.grid()
# plt.show()


# import numpy as np

# D = np.array([[1,1,1],
#               [1,2,2],
#               [1,2,3]])

# X = np.array([[1],[2],[3]])

# A = np.zeros(5)
# x = np.zeros((3,5))

# for i in range(5):
#     A[i] = 0
#     alp = D @ X
#     X1 = alp/alp[0]
#     X = X1
#     x[:,i] = X1.flatten()

# wn = np.sqrt(1/alp[0])
# print("Natural frequency ",wn)
# print("Mode Shapes ",X)

# import numpy as np

# K = 1000
# M = 10

# wn = np.sqrt(K/M)
# print("Natural Frequency : ",wn)

# import numpy as np
# import matplotlib.pyplot as plt

# M = 5 
# K = 2000
# t = np.arange(0,3,0.01)
# x0 = 40e-3
# x0d = 400e-3

# wn = np.sqrt(K/M)
# print("Natural Frequency : ",wn)

# A = x0*np.cos(wn*t)
# B = (x0d/wn)*np.sin(wn*t)

# x = A+B
# plt.plot(t,x,color="red")
# plt.xlabel("Time in sec")
# plt.ylabel("response in m")
# plt.title("Sing DOF Undamped")
# plt.grid()
# plt.show()


# import numpy as np
# import matplotlib.pyplot as plt

# k = 1200
# m = 12
# x0 = 1e-3
# x0d = 0 
# t = np.arange(0,3,0.01)

# wn = np.sqrt(k/m)
# print("Natural Frequency", wn)

# A = x0*np.cos(wn*t)
# B = (x0d*np.sin(wn*t))/wn

# x = A + B

# plt.plot(t,x,color="red")


# m1 = 16

# wn1 = np.sqrt(k/m1)
# print("Natural Frequency", wn1)

# A1 = x0*np.cos(wn1*t)
# B1 = (x0d *np.sin(wn1*t))/wn1

# x1 = A1 + B1

# plt.plot(t,x1,color="blue")


# t1 = 2.2

# A2 = x0*np.cos(wn1*t1)
# B2 = (x0d*np.sin(wn1*t1))/wn1

# x2 = A2 + B2
# plt.plot(t1,x2,"bo")

# A3 = x0*np.cos(wn*t1)
# B3 = (x0d*np.sin(wn*t1))/wn

# x3 = A3 + B3

# plt.plot(t1,x3,"ro")

# plt.xlabel("Time in sec")
# plt.ylabel("response in m")
# plt.title("Sing DOF Undamped")
# plt.grid()
# plt.show()

# import numpy as np

# m = 5
# c = 50
# k = 5000

# wn = np.sqrt(k/m)
# print("Undamped natural frequency : ",wn)

# cc = 2*np.sqrt(k*m)
# zeta = c/cc
# print("Damping Ratio : ",zeta)
# wd = np.sqrt(1-zeta**2)*wn
# print("damped natural frequency : ",wd)

# import numpy as np
# import matplotlib.pyplot as plt

# m = 10
# c = 50
# k = 1600
# t = np.arange(0,3,0.01)
# x0 = 2  
# x0d = -0.1

# wn = np.sqrt(k/m)
# print("Natural Frequency : ",wn)

# cc = 2*np.sqrt(k*m)

# zeta = c/cc
# print("Damping ratio : ",zeta)

# wd = np.sqrt(1-zeta**2)*wn

# A = np.exp(-zeta * wn * t)
# B = np.cos(wd*t)
# C = ((x0d + zeta*wn*x0)/wd)*np.sin(wd*t)

# x = A*(B+C)

# plt.plot(t,x,color="red")
# plt.xlabel("time in s")
# plt.ylabel("response in m")
# plt.title("Damped Single DOF")
# plt.grid()
# plt.show()


import numpy as np
import matplotlib.pyplot as plt

k = 1000
m = 20
x0 = 1
x0d = 0
t = np.arange(0,7,0.01)
c = 20 

wn = np.sqrt(k/m)
print("Natural frequency : ",wn)

A = np.cos(wn*t)
B = (x0d/wn)*np.sin(wn*t)
x = A+B

plt.plot(t,x,color="red")
plt.xlabel("time in s")
plt.ylabel("response in m")
plt.title("unDamped Single DOF")
plt.grid()

cc = np.sqrt(k*m)
zeta = c/cc
print("Damping Ratio : ",zeta)

wd = np.sqrt(1-zeta**2)*wn
print("Damped Natural Frequency : ",wd)

A1 = np.exp(-zeta)

# plt.show()