    
        <script>
            var resizefunc = [];
        </script>

        <!-- jQuery  -->
        <script src="<?= base_url() ?>js/bootstrap.min.js"></script>
        <script src="<?= base_url() ?>js/waves.js"></script>
        <script src="<?= base_url() ?>js/general.js"></script>
        <script src="<?= base_url() ?>js/wow.min.js"></script>
        <script src="<?= base_url() ?>js/jquery.nicescroll.js" type="text/javascript"></script>
        <script src="<?= base_url() ?>js/jquery.scrollTo.min.js"></script>
        <script src="<?= base_url() ?>assets/chat/moment-2.2.1.js"></script>
        <script src="<?= base_url() ?>assets/jquery-sparkline/jquery.sparkline.min.js"></script>
        <script src="<?= base_url() ?>assets/jquery-detectmobile/detect.js"></script>
        <script src="<?= base_url() ?>assets/fastclick/fastclick.js"></script>
        <script src="<?= base_url() ?>assets/jquery-slimscroll/jquery.slimscroll.js"></script>
        <script src="<?= base_url() ?>assets/jquery-blockui/jquery.blockUI.js"></script>

        <!-- sweet alerts -->
        <script src="<?= base_url() ?>assets/sweet-alert/sweet-alert.min.js"></script>
        <script src="<?= base_url() ?>assets/sweet-alert/sweet-alert.init.js"></script>

        <!-- flot Chart -->
        <script src="<?= base_url() ?>assets/flot-chart/jquery.flot.js"></script>
        <script src="<?= base_url() ?>assets/flot-chart/jquery.flot.time.js"></script>
        <script src="<?= base_url() ?>assets/flot-chart/jquery.flot.tooltip.min.js"></script>
        <script src="<?= base_url() ?>assets/flot-chart/jquery.flot.resize.js"></script>
        <script src="<?= base_url() ?>assets/flot-chart/jquery.flot.pie.js"></script>
        <script src="<?= base_url() ?>assets/flot-chart/jquery.flot.selection.js"></script>
        <script src="<?= base_url() ?>assets/flot-chart/jquery.flot.stack.js"></script>
        <script src="<?= base_url() ?>assets/flot-chart/jquery.flot.crosshair.js"></script>

        <!-- Counter-up -->
        <script src="<?= base_url() ?>assets/counterup/waypoints.min.js" type="text/javascript"></script>
        <script src="<?= base_url() ?>assets/counterup/jquery.counterup.min.js" type="text/javascript"></script>
        
        <!-- CUSTOM JS -->
        <script src="<?= base_url() ?>js/jquery.app.js"></script>

        <!-- Dashboard -->
        <script src="<?= base_url() ?>js/jquery.dashboard.js"></script>

        <!-- Chat -->
        <script src="<?= base_url() ?>js/jquery.chat.js"></script>

        <!-- Todo -->
        <script src="<?= base_url() ?>js/jquery.todo.js"></script>

        <!-- Anuncios -->
        <script src="<?= base_url() ?>js/anuncios.js"></script>

        <!-- Actividades -->
        <script src="<?= base_url() ?>js/actividades.js"></script>

        <!-- Pruebas -->
        <script src="<?= base_url() ?>js/pruebas.js"></script>

        <!-- Datatable -->
        <script src="<?= base_url() ?>assets/dataTables/jquery.dataTables.min.js"></script>
        <script src="<?= base_url() ?>assets/dataTables/dataTables.bootstrap4.min.js"></script>
        <script src="<?= base_url() ?>assets/dataTables/dataTables.responsive.min.js"></script>
        <script src="<?= base_url() ?>assets/dataTables/responsive.bootstrap4.min.js"></script>
        <script src="<?= base_url() ?>assets/dataTables/dataTables.buttons.min.js"></script>
        <script src="<?= base_url() ?>assets/dataTables/buttons.bootstrap4.min.js"></script>
        <script src="<?= base_url() ?>assets/dataTables/buttons.html5.min.js"></script>
        <script src="<?= base_url() ?>assets/dataTables/buttons.flash.min.js"></script>
        <script src="<?= base_url() ?>assets/dataTables/buttons.print.min.js"></script>
        <script src="<?= base_url() ?>assets/dataTables/dataTables.keyTable.min.js"></script>
        <script src="<?= base_url() ?>assets/dataTables/dataTables.select.min.js"></script>
        
        <!-- Foros -->
        <script src="<?= base_url() ?>https://kothing.github.io/editor/dist/kothing-editor.min.js"></script>

        <script type="text/javascript">
            /* ==============================================
            Counter Up
            =============================================== */
            jQuery(document).ready(function($) {
                $('.counter').counterUp({
                    delay: 100,
                    time: 1200
                });
            });
        </script>
    
    </body>
</html>

<?php
    if($this->session->userdata("logged_in")){
        ?>
            <script type="text/javascript">
                var user = <?= json_encode($this->session->userdata("logged_in")) ?>;
                cambio_menu();
                cfg_docente();
            </script>
        <?php
    }
?>