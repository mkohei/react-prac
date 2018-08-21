FROM centos:centos6

MAINTAINER mkohei

ENV PATH $PATH:/usr/bin

RUN yum -y update

RUN rpm -ivh http://nginx.org/packages/centos/6/noarch/RPMS/nginx-release-centos-6-0.el6.ngx.noarch.rpm

RUN yum -y install nginx

#RUN echo "example docker contena nginx server" > /usr/share/nginx/html/index.html
ADD ./ /usr/share/nginx/html/

ENTRYPOINT /usr/sbin/nginx -g 'daemon off;' -c /etc/nginx/nginx.conf

EXPOSE 80


