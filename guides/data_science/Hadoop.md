## What is Big Data ?

Any piece of information can be considered as data and thus it can be of various sizes.
The data size today is increasing tremendously and thus to process and manage such huge volume of data, different Big Data technologies comes into play.

The Big Data consits of the 5V's as follows:-

1) Volume
2) Variety
3) Velocity
4) Value
5) Veracity

## Problems Faced with Big Data
The problems with Big Data are as follows :-
1) Storage.
2) Processing data having complex structure.
3) Bringing huge amount of data to computation until becomes a bottleneck.

## Hadoop - A Solution to Problems of Big Data

Hadoop is a framework that allows you to store and process huge data in parallel and distributed fashion. Hadoop has the following  two components:-
1) HDFS(storage) - It allows to dump any kind of data across the cluster.It is a distributed file system .It divides input data into smaller chunks and store it.It stores any kind of data and no schema validation is done while dumping the data,that is whenever you dump data you do not need to specify a schema for it.

2) MapReduce(Processing)-It allows parallel  processing of the data stored in HDFS.It is basically a software framework which helps in writing applications that processes large data sets using distributed and parallel algorithms inside hadoop enviornment.It consists of two parts as folows:-
  - Map part-A block of data is read and processed to produce a key value pair.
  
  - Reduce part -The output of the Map job is the input to the Reduce part.It recieves these key value pairs from multiple map jobs and it aggregates these intermediate key value pairs as a final output.


