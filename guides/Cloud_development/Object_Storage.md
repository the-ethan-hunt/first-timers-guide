# Object Storage: An Introduction

### What is object storage?

**Object storage** is a system that stores items as self-contained units known as *objects*.  Objects are stored with files called *metadata* that contain useful information about the object.  Each object is identified and accessed by using a unique number assigned to it when it is stored. 

### How is object storage different to the files on my computer?

Unlike in a block storage system, each object is kept whole and is not broken into pieces.  Further, each object is stored at the same level, rather than in a hierarchy of folders and subfolders as they would be in a file storage system.  

### What are some advantages of object storage systems?


-	They can handle large amounts of data and are especially good at handling unstructured data.
-	They can scale to virtually unlimited size.
-	Metadata allows users to quickly identify and retrieve data.
### What are the drawbacks of object storage systems?
-	Files cannot be locked and are accessible to all users with access to the storage location.
-	Can perform slower and require more processing time than file storage or block storage in some use cases.
-	Objects are stored as whole pieces and a part of an object cannot be modified after it has been stored.
### What use cases is object storage suitable for?
Object storage systems are great for use cases that create a lot of data and need to scale quickly.
-	IoT data management
-	Email
-	Backup/recovery
-	Video surveillance
### Who provides object storage services?
All cloud providers provide object storage as a major feature of their services, including [**AWS**][1], [**Microsoft**][2], and [**Google**][3].

[Excellent overview of Object vs. File vs. Block Storage][4]
_________________________________
[1]: https://aws.amazon.com/s3/
[2]: https://azure.microsoft.com/ja-jp/products/storage/blobs
[3]: https://cloud.google.com/storage
[4]: https://www.ibm.com/cloud/blog/object-vs-file-vs-block-storage