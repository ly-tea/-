    function show_date_time() {
        window.setTimeout("show_date_time()", 1000);
        today = new Date();
        nowyear = today.getFullYear();
        gaokaoDay = new Date(nowyear, 5, 7, 9, 0, 0);//��������Ǹ߿�ʱ��(��ǰ���,6��,7��,9��,0��,0��)
        zhongkaoDay = new Date(nowyear, 5, 14, 9, 0, 0);//����������п�ʱ��(��ǰ���,6��,14��,9��,0��,0��)
        gaokaotimeold = (gaokaoDay.getTime() - today.getTime());
        zhongkaotimeold = (zhongkaoDay.getTime() - today.getTime());
        gaokaosectimeold = gaokaotimeold / 1000;
        zhongkaosectimeold = zhongkaotimeold / 1000;
        gaokaosecondsold = Math.floor(gaokaosectimeold);
        zhongkaosecondsold = Math.floor(zhongkaosectimeold);
        msPerDay = 24 * 60 * 60 * 1000;
        e_gaokaodaysold = gaokaotimeold / msPerDay;
        e_zhongkaodaysold = zhongkaotimeold / msPerDay;
        gaokaodaysold = Math.floor(e_gaokaodaysold);
        zhongkaodaysold = Math.floor(e_zhongkaodaysold);
        e_gaokaohrsold = (e_gaokaodaysold - gaokaodaysold) * 24;
        e_zhongkaohrsold = (e_zhongkaodaysold - zhongkaodaysold) * 24;
        gaokaohrsold = Math.floor(e_gaokaohrsold);
        zhongkaohrsold = Math.floor(e_zhongkaohrsold);
        e_gaokaominsold = (e_gaokaohrsold - gaokaohrsold) * 60;
        e_zhongkaominsold = (e_zhongkaohrsold - zhongkaohrsold) * 60;
        gaokaominsold = Math.floor((e_gaokaohrsold - gaokaohrsold) * 60);
        zhongkaominsold = Math.floor((e_zhongkaohrsold - zhongkaohrsold) * 60);
        gaokaoseconds = Math.floor((e_gaokaominsold - gaokaominsold) * 60);
        zhongkaoseconds = Math.floor((e_zhongkaominsold - zhongkaominsold) * 60);
        if (zhongkaosectimeold <= -374400)//�п�����������ȡ��������ʾ
        {
            gkcountdown.innerHTML = "";
        } else if (gaokaosectimeold <= -374400)//�߽���������ָ�ȡ���߿���ʾ
        {
            gkcountdown.innerHTML = "<div class=gkdjs1></div>";
        } else if (gaokaosectimeold <= -115200) {
            gkcountdown.innerHTML = "<div class=gkdjs><font color=#f8c8a4>�߿��ѽ���</font><br/>Ԥףͬѧ�ǽ��������</div>";
        } else if (gaokaosectimeold <= 0) {
            gkcountdown.innerHTML = "<div class=gkdjs><font color=#f8c8a4>�߿�������</font><br/>��λͬѧ���ͣ�</div>";
        } else if (gaokaosectimeold <= 8640000)//����߿�100�쿪ʼ��ʾ����ʱ
        {
            gkcountdown.innerHTML = "<div class=gkdjs><font>����߿�</font><font class=sz>" + gaokaodaysold + "</font><font>��</font><br/>" + gaokaohrsold + "Сʱ" + gaokaominsold + "��" + gaokaoseconds + "��" + "</div>";
        } else if (gaokaosectimeold >= 8640000)//����߿�����100��ȡ����ʾ
        {
            gkcountdown.innerHTML = "";
        }
        if (zhongkaosectimeold <= -374400)//�п�����������ָ��հ���ʾ
        {
            zkcountdown.innerHTML = "";
        } else if (zhongkaosectimeold <= -115200) {
            zkcountdown.innerHTML = "<div class=zkdjs><font color=#f8c8a4>�п��ѽ���</font><br/>Ԥףͬѧ�ǽ��������</div>";
        } else if (zhongkaosectimeold <= 0) {
            zkcountdown.innerHTML = "<div class=zkdjs><font color=#f8c8a4>�п�������</font><br/>��λͬѧ���ͣ�</div>";
        } else if (gaokaosectimeold <= 8640000)//����߿�100�쿪ʼ��ʾ����ʱ
        {
            zkcountdown.innerHTML = "<div class=zkdjs><font>�����п�</font><font class=sz>" + zhongkaodaysold + "</font><font>��</font><br/>" + zhongkaohrsold + "Сʱ" + zhongkaominsold + "��" + zhongkaoseconds + "��" + "</div>";
        } else if (gaokaosectimeold >= 8640000)//����߿�����100��ȡ����ʾ
        {
            zkcountdown.innerHTML = "";
        }
    }
    show_date_time();