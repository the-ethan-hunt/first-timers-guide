## Overview
Organizations need data to make intelligent decisions. Cheap compute and storage has allowed organizations to accumulate massive amounts of data. Algorithms and scientific methods need to be applied to this data, which may be structured or unstructured, to derive insights. This is considered as data science. Modern tools and frameworks are required to accomplish this.

## Introduction to Apache Spark
Apache spark is an open source Big Data processing framework that is built for this purpose. It is a very powerful and efficient data processing platform originally created at UC Berkley. Spark is a cluster-computing framework, which means it uses multiple computers to process its workloads. It is independent of Hadoop, but uses Hadoop's Distributed File System (HDFS). Spark also replaces Hadoop's "Map/Reduce" framework with its own data processing framework. It supports development in multiple languages (Java, Scala, Python and R) in a uniform manner. Spark has a number of libraries and modules that make it a robust ecosystem for Big Data processing.

## High Performance
What makes it fast? First, Spark is capable of using both memory and disk for processing. Spark can string together dependent tasks (chaining) in memory while minimizing writes to the disk. When the output of one task has to be handed as input to the next task, it doesn't always have to write it to disk. Second it uses a sophisticated concept called Directed Acyclic Graph (DAG). DAG is used to organize and sequence tasks, determine which tasks can be run in parallel, when to use memory only and when to write to disk, etc. Similar to Hadoop Map / Reduce, Spark can handle batch workloads very well, but is also built to handle machine-based learning and streaming workloads. So it is good for processing web clicks in real time for instance.

## RDD - Spark's Foundational Data Structure
Spark uses a data structure called RDD. It is an immutable (unchangeable) collection of objects which is distributed across multiple nodes in the cluster. RDD is:


1. Resilient - It is able to self-recover damaged partitions or from node failures
1. Distributed - It is distributed across multiple nodes
1. Dataset - It holds the data which could be database records, a text file, a CSV file, etc.