# Overview 
In all areas of engineering, optimization is a way of im proving designs,  it has served as a tool to save material, time, effort, energy, etc. When working in a new design, me chanical engineers need to analyze and test each candidate configuration, usually, in a test-error cycle they improve an initial design with respect to to a given criterion. To test a specific configuration of a mechanism, a computer simula tion is convenient in order to save resources, and reducing costs and time. In addition, an adequate computer program could test much more candidate configurations than a man designer, nevertheless, it must do it in an adequate an efficient way.
# Simulated annealing
The Simulated Annealing Algorithm (SA)[1] is a global optimization algorithm based on Gibbs probability distri bution. It generates random configurations from the Gibbs distribution using the metropolis sampling method, the better a configuration is the greater the probability to be sampled. Nevertheless, a drawback of the SA is the need of a huge amount of objective function evaluations, in this case an evaluation is a numerical simulation of a particular robot configuration.  The SA requires lots of simulations under different conditions to know when a configuration is better than another. Due to this fact, parallel computation is used to reduce the time require to find an approximation to the global optimal mechanism.  So, SA returns the best con figuration of a mechanism, selected among a huge amount of randomly generated configurations, having in mind that this random process samples intensively the most promising regions of the search space.
# Genetic Algorithm
Another optimization method is the Genetic Algorithm (GA) [2].  GA imitates the evolution of the living beings, described by Charles Darwin,  and it is being part of the group of Evolutionary Algorithms(EA). GA are directly, par allel, stochastic method for global search and optimization. GA [3] uses genetic operations such as selection, crossover and mutation to generate new individuals. Such individuals can be the configurations for the robotic manipulator.  As the species’ evolution in nature, GA tries the development of new and better across the generations. Since this method is heuristic and not have a defined behavior and according to the specific problem the number of generations needed to discover a solution that solves the problem can be lots, the development in parallel could have an interesting perfor mance comparing it to a sequential GA.


**This is the introduction of an article named *Comparison of parallel versions of SA and GA for optimizing the performance of a robotic manipulator*, if you want to read it complete, contact me: hbaena2adan@gmail.com**

[1]
M.; Martini C.; Ridella S. Corana, A.; Marchesi.  Minimizing multi modal functions of continuous variables with the simulated annealing algorithm. ACM Transactions on Mathematical Software , 13:262–280, 1987. 

[2]Andrey Popov.  Genetic algorithms for optimization. User Manual,Hamburg, 2013, 2005.

[3] Zhenping  Chen,  Zhenyu  Zhang,  Jinsen  Xie,  Qian  Guo,  and  Tao Yu.   Metaheuristic optimization method for compact reactor radia tion shielding design based on genetic algorithm. Annals of Nuclear Energy , 134:318–329, 2019. 

[4] P. M. Pardalos,  L. Pitsoulis,  T. Mavridou,  and M. G.  C. Resende. Parallel search for combinatorial optimization:  Genetic algorithms, simulated annealing, tabu search and GRASP. In Parallel Algorithms for Irregularly Structured Problems , pages 317–331. Springer Berlin Heidelberg, 1995. 

[5] Jung Y.; Van Gucht Dirk Jog, Prasanna; Suh.  Parallel genetic algo rithms applied to the traveling salesman problem. SIAM Journal on Optimization , 1:515–529, 1991. 

[6] Hartmut Brauer and Marek Ziolkowski. Shape Optimization with Adaptive Simulated Annealing and Genetic Algorithms , pages 25–30. Springer Netherlands, Dordrecht, 2005. 

[7] Gian-Carlo Rota. Simulated annealing: Theory and applications: P. j. m. van laarhove and e. h. l. aarts, reidel, 1987, 186 pp. Advances in Mathematics , 71:130, 1988. 

[8] John McCall.   Genetic algorithms for modelling and optimisation. Journal of Computational and Applied Mathematics , 184:205–222, 2005.